using PlataformaSeguimientoEducativo.DTOs;

namespace PlataformaSeguimientoEducativo.Services
{
	public interface IParentService
	{
		// Método para obtener el dashboard de un padre
		Task<ParentDashboardDto> GetStudentGradesForParentAsync(int parentId, int studentId);
	}
}
