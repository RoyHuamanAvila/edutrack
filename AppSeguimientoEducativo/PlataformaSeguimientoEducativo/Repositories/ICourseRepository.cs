using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetCoursesForStudentAsync(int studentId);
        Task<List<Course>> GetCoursesWithDetailsForStudentAsync(int studentId);
    }
}
