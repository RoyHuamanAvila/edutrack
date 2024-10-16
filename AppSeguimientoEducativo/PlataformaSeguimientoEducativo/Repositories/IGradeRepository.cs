
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public interface IGradeRepository : IRepository<Grade>
	{
		Task<List<Grade>> GetGradesByStudentIdAsync(int studentId);
	}
}