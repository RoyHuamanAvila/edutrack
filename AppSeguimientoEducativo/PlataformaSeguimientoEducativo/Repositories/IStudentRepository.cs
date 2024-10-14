using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface IStudentRepository : IRepository<Student>
    {
        Task<Student> GetByUserIdAsync(int userId);
        Task<Student> GetByUserIdWithDetailsAsync(int userId);
    }
}
