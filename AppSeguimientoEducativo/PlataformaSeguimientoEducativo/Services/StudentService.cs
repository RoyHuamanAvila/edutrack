using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
    public class StudentService : IStudentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;

        public StudentService(IUnitOfWork unitOfWork, IUserService userService)
        {
            _unitOfWork = unitOfWork;
            _userService = userService;
        }

        public async Task<Student> GetById(int id)
        {
            return _unitOfWork.Students.GetById(id);
        }

        public async Task<StudentDashboardDto> GetStudentDashboardAsync(int userId)
        {
            var user = await _unitOfWork.Users.GetUserWithRoleAsync(userId);
            if (user == null || user.Role.RoleName != "Student")
            {
                throw new KeyNotFoundException("Usuario no encontrado o no es estudiante.");
            }

            var student = await _unitOfWork.Students.GetByUserIdAsync(userId);
            if (student == null)
            {
                throw new KeyNotFoundException($"No se encontró un perfil de estudiante para el userId: {userId}.");
            }

            // Obtener los cursos y construir el StudentDashboardDto.
            var courses = await _unitOfWork.Courses.GetCoursesForStudentAsync(student.StudentId);
            var dashboard = new StudentDashboardDto
            {
                StudentId = student.StudentId,
                FullName = user.FullName,
                Role = "Student",
                Grade = student.Grade,
                EnrollmentDate = student.EnrollmentDate,
                Courses = courses.Select(c => new CourseInfoDto
                {
                    CourseId = c.CourseId,
                    CourseName = c.CourseName,
                    TeacherName = c.Teacher.User.FullName,
                    Subject = c.Teacher.Subject,
                    AcademicPeriodName = c.AcademicPeriod.PeriodName,
                    Grades = c.Grades
                        .Where(g => g.StudentId == student.StudentId)
                        .Select(g => new GradeDto
                        {
                            GradeValue = g.GradeValue,
                            EvaluationDate = g.EvaluationDate,
                        }).ToList(),
                    Feedbacks = c.Feedbacks
                        .Where(f => f.StudentId == student.StudentId)
                        .Select(f => new FeedbackDto
                        {
                            FeedbackText = f.FeedbackText,
                            TeacherName = f.Teacher.User.FullName,
                            FeedbackDate = f.FeedbackDate
                        }).ToList()
                }).ToList()
            };

            return dashboard;
        }

        public async Task<Student> Register(RegisterUserDto registerUserDto)
        {
            var user =  await _userService.RegisterUserAsync(registerUserDto);
            var student = new Student
            {
                EnrollmentDate = DateTime.Now,
                User = user
            };
            _unitOfWork.Students.Add(student);
            await _unitOfWork.CompleteAsync();
            return student;
        }
    }
}
