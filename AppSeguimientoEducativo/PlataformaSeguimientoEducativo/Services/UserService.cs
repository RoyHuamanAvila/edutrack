using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PlataformaSeguimientoEducativo.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IConfiguration _configuration;

        public UserService(IUnitOfWork unitOfWork, IPasswordHasher<User> passwordHasher, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _passwordHasher = passwordHasher;
            _configuration = configuration;
        }

        public async Task<User> RegisterUserAsync(RegisterUserDto registerDto)
        {
            var existingUser = await GetUserByEmailAsync(registerDto.Email);
            if (existingUser != null)
            {
                throw new ApplicationException("El email ya esta en uso");
            }

            var role = await _unitOfWork.Roles.GetRoleByNameAsync(registerDto.RoleName);
            if (role == null)
            {
                throw new ApplicationException("Rol invalido");
            }

            var user = new User
            {
                FullName = registerDto.FullName,
                Email = registerDto.Email,
                RoleId = role.RoleId,
                ProfileImageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, registerDto.Password);

            _unitOfWork.Users.Add(user);
            await _unitOfWork.CompleteAsync();

            return user;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _unitOfWork.Users.GetUserWithRoleAsync(id);
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _unitOfWork.Users.GetUserByEmailAsync(email);
        }

        public async Task<string> LoginAsync(LoginDto loginDto)
        {
            var user = await _unitOfWork.Users.GetUserByEmailAsync(loginDto.Email);
            if (user == null)
            {
                throw new ApplicationException("Email o contraseña invalido");
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, loginDto.Password);
            if (result == PasswordVerificationResult.Failed)
            {
                throw new ApplicationException("Email o contraseña invalido");
            }

            var token = GenerateJwtToken(user);
            return token;
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Role, user.Role.RoleName) 
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Issuer"], 
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<StudentDashboardDto> GetStudentDashboardAsync(int userId)
        {
            var user = await _unitOfWork.Users.GetUserWithRoleAsync(userId);
            if (user == null || user.Role.RoleName != "Student")
            {
                throw new ApplicationException("Usuario no encontrado o no es estudiante");
            }

            var student = await _unitOfWork.Students.GetByUserIdAsync(userId);
            if (student == null)
            {
                throw new ApplicationException("Perfil de estudiante no encontrado");
            }

            var courses = await _unitOfWork.Courses.GetCoursesForStudentAsync(student.StudentId);

            var dashboard = new StudentDashboardDto
            {
                StudentId = student.StudentId,
                FullName = user.FullName,
                Role = "Student",
                Courses = courses.Select(c => new CourseInfoDto
                {
                    CourseId = c.CourseId,
                    CourseName = c.CourseName,
                    TeacherName = c.Teacher.User.FullName,
                    AcademicPeriodName = c.AcademicPeriod.PeriodName,
                    Grades = c.Grades
                        .Where(g => g.StudentId == student.StudentId)
                        .Select(g => new GradeDto
                        {
                            GradeValue = g.GradeValue,
                            EvaluationDate = g.EvaluationDate 
                        })
                        .ToList(),
                    Feedbacks = c.Feedbacks
                        .Where(f => f.StudentId == student.StudentId)
                        .Select(f => new FeedbackDto
                        {
                            FeedbackText = f.FeedbackText,
                            TeacherName = f.Teacher.User.FullName, 
                            FeedbackDate = f.FeedbackDate 
                        })
                        .ToList()
                }).ToList()
            };



            return dashboard;
        }
    }
}
