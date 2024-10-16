using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public interface IParentRepository : IRepository<Parent>
	{
		Task<Parent> GetByIdAsync(int parentId);
		Task<bool> HasAccessToStudentAsync(int parentId, int studentId);
	}
}
