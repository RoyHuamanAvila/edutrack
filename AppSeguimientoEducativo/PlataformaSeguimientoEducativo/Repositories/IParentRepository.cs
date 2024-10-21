using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface IParentRepository : IRepository<Parent>
    {
        Task<ParentStudent> GetParentByIdAsync(int parentId);
        Task<ParentStudent> GetParentStudentDetailsAsync(int studentId, int parentId);
    }
}
