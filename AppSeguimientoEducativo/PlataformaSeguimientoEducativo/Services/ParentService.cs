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
            var user = await _unitOfWork.Users.GetUserWithRoleAsync(parentId);
            if (user == null || user.Role.RoleName != "Parent")
            {
                throw new UnauthorizedAccessException("Usuario no tiene el rol de padre.");
            }

            var parent = await _unitOfWork.Parents.GetParentByIdAsync(parentId);
            if (parent == null)
            {
                throw new KeyNotFoundException("No se encontró un perfil de padre para este usuario.");
            }

            var student = await _unitOfWork.Students.GetByUserIdWithDetailsAsync(studentId);
            var courses = await _unitOfWork.Courses.GetCoursesForStudentAsync(student.StudentId);
            var gradeStudents = await _unitOfWork.Parents.GetParentStudentDetailsAsync(parentId, studentId);
            if (gradeStudents == null)
            {
                throw new KeyNotFoundException($"No se encontraron notas para el estudiante con ID: {studentId}.");
            }
            return new ParentDashboardDto
            {
                ParentId = parent.ParentId,
                ParentName = user.FullName,
                ParentRole = user.Role.RoleName,
                Students = new List<StudentInfoDto>
            {
                new StudentInfoDto
                {
                    StudentId = student.StudentId,
                    StudentName = student.User.FullName,
                    Tutor = new Dictionary<string, string>(),
                    Courses = courses.Select(course => new CourseDto
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
                    }).ToList()
                }
            }
            };
        }
    }
}
