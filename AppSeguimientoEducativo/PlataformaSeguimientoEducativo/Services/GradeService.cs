using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
	public class GradeService : IGradeService
	{
		private readonly IUnitOfWork _unitOfWork;

		public GradeService(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		// Implementa el método para obtener las notas por ID de estudiante
		public async Task<IEnumerable<GradeDto>> GetGradesByStudentIdAsync(int studentId)
		{
			// Obtener las notas del repositorio
			var grades = await _unitOfWork.Grades.GetGradesByStudentIdAsync(studentId);

			// Mapear las notas a GradeDto
			var gradeDtos = grades.Select(g => new GradeDto
			{
				GradeValue = g.GradeValue,
				EvaluationDate = g.EvaluationDate
			}).ToList();

			return gradeDtos;
		}
	}
}
