
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public interface IGradeRepository : IRepository<Grade>
	{
		Task<List<Grade>> GetGradesByStudentId(int studentId, int? courseId = null, int? periodId = null);
		Task<Grade> AddGradesAsync(Grade grade);
	}
}