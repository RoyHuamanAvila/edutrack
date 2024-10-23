using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface ITeacherRepository : IRepository<Teacher>
    {
        Task<IEnumerable<Teacher>> GetAllWithUserAsync();
        Task<Teacher> GetByIdWithUserAsync(int teacherId);
        Task DeleteAsync(int teacherId);
    }
}