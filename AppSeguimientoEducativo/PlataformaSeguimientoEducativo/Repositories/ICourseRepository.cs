using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface ICourseRepository : IRepository<Course>
    {
        Task<IEnumerable<Course>> GetCoursesForStudentAsync(int studentId);
        Task<List<Course>> GetCoursesWithDetailsForStudentAsync(int studentId);
        Task<IEnumerable<Course>> GetAllAsync();
        Task<Course> GetFullByIdAsync(int id);
        Task<Course> AddAsync(Course course);
        Task<Course> UpdateAsync(Course course);
        Task<bool> DeleteAsync(int id);
    }
}
