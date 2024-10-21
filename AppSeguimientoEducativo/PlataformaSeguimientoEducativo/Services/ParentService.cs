using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
    public class ParentService : IParentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ParentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ParentDashboardDto> GetDashboardForParentAsync(int parentId, int studentId)
        {
            // Verificar si el usuario es un padre
            var user = await _unitOfWork.Users.GetUserWithRoleAsync(parentId);
            if (user == null || user.Role.RoleName != "Parent")
            {
                throw new UnauthorizedAccessException("Usuario no tiene el rol de padre.");
            }

            // Verificar si el padre tiene acceso al estudiante
            var parent = await _unitOfWork.Parents.GetParentByIdAsync(parentId);
            if (parent == null)
            {
                throw new KeyNotFoundException("No se encontró un perfil de padre para este usuario.");
            }

            // Obtener las notas del estudiante
            var student = await _unitOfWork.Students.GetByUserIdWithDetailsAsync(studentId);
            var courses = await _unitOfWork.Courses.GetCoursesForStudentAsync(student.StudentId);
            var gradeStudents = await _unitOfWork.Parents.GetParentStudentDetailsAsync(parentId, studentId);
            if (gradeStudents == null)
            {
                throw new KeyNotFoundException($"No se encontraron notas para el estudiante con ID: {studentId}.");
            }

            // Crear Dashboard del padre
            return new ParentDashboardDto
            {
                ParentId = parent.ParentId,
                ParentName = user.FullName,
                ParentRole = user.Role.RoleName,
                Students =
                [
                    new StudentDashboardDto
                    {
                        StudentId = student.StudentId,
                        FullName = user.FullName,
                        Role = "Student",
                        Grade = student.Grade,
                        EnrollmentDate = student.EnrollmentDate,
                        Courses = courses.Select(course => new CourseInfoDto
                        {
                            CourseId = course.CourseId,
                            CourseName = course.CourseName,
                            TeacherName = course.Teacher.User.FullName,
                            Subject = course.Teacher.Subject,
                            AcademicPeriodName = course.AcademicPeriod.PeriodName,
                            Grades = course.Grades
                                .Where(grade => grade.StudentId == student.StudentId)
                                .Select(grade => new GradeDto
                                {
                                    GradeValue = grade.GradeValue,
                                    EvaluationDate = grade.EvaluationDate,
                                }).ToList(),
                            Feedbacks = course.Feedbacks
                                .Where(feedback => feedback.StudentId == student.StudentId)
                                .Select(feedback => new FeedbackDto
                                {
                                    FeedbackText = feedback.FeedbackText,
                                    TeacherName = feedback.Teacher.User.FullName,
                                    FeedbackDate = feedback.FeedbackDate
                                }).ToList()
                        }).ToList()
                    }
                ]
            };
        }
    }
}
