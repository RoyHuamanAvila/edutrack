using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
    public class StudentService : IStudentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public StudentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
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
                Role = student.User.Role.RoleName,
                Grade = student.Grade,
                EnrollmentDate = student.EnrollmentDate,
                ProfileImageUrl = student.User.ProfileImageUrl,
                PhoneNumber = student.User.PhoneNumber,
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

    }
}
