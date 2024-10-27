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
            return await _unitOfWork.Students.GetByIdWithUserAsync(id);
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

            var courses = await _unitOfWork.Courses.GetCoursesForStudentAsync(student.StudentId);

            var coursesInfo = courses.Select(course => new CourseDto
            {
                CourseId = course.CourseId,
                CourseName = course.CourseName,
                Teachers = new List<TeacherInfoDto>
            {
                new TeacherInfoDto
                {
                    TeacherName = course.Teacher.User.FullName,
                    ProfileImageUrl = course.Teacher.User.ProfileImageUrl,
                    SubjectName = course.Teacher.Subject,
                    Period = course.AcademicPeriod.PeriodName,
                    GradeValue = course.Grades
                        .Where(g => g.StudentId == student.StudentId)
                        .OrderByDescending(g => g.EvaluationDate)
                        .Select(g => g.GradeValue)
                        .FirstOrDefault(),
                    Feedback = course.Feedbacks
                        .Where(f => f.StudentId == student.StudentId)
                        .OrderByDescending(f => f.FeedbackDate)
                        .Select(f => new FeedbackDetailDto
                        {
                            FeedbackText = f.FeedbackText,
                            FeedbackDate = f.FeedbackDate.ToString("yyyy-MM-dd")
                        })
                        .FirstOrDefault() ?? new FeedbackDetailDto()
                }
            }
            }).ToList();

            var dashboard = new StudentDashboardDto
            {
                StudentId = student.StudentId,
                StudentName = student.User.FullName,
                Tutor = new Dictionary<string, string>(),
                Courses = coursesInfo
            };

            return dashboard;
    }

        public async Task<Student> Register(RegisterUserDto registerUserDto)
        {
            registerUserDto.RoleName = "Student";
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
        public async Task<IEnumerable<Student>> GetAllWithUserAsyn()
        {
            var students = await _unitOfWork.Students.GetAllWithUserAsync();
            return students;
        }

        public async Task DeleteStudentAsync(int studentId)
        {
            await _unitOfWork.Students.DeleteAsync(studentId);
        }
    }
}
