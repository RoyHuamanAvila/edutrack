using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
	public class ParentService : IParentService
	{
		private readonly IUnitOfWork _unitOfWork;
		private readonly IGradeService _gradeService;

		public ParentService(IUnitOfWork unitOfWork, IGradeService gradeService)
		{
			_unitOfWork = unitOfWork;
			_gradeService = gradeService;
		}

		public async Task<ParentDashboardDto> GetStudentGradesForParentAsync(int parentId, int studentId)
		{
			// Verificar si el usuario es un padre
			var user = await _unitOfWork.Users.GetUserWithRoleAsync(parentId);
			if (user == null || user.Role.RoleName != "Parent")
			{
				throw new UnauthorizedAccessException("Usuario no tiene el rol de padre.");
			}

			// Verificar si el padre tiene acceso al estudiante
			var parent = await _unitOfWork.Parents.GetByIdAsync(parentId);
			if (parent == null)
			{
				throw new KeyNotFoundException("No se encontró un perfil de padre para este usuario.");
			}

			if (!await _unitOfWork.Parents.HasAccessToStudentAsync(parentId, studentId))
			{
				throw new UnauthorizedAccessException("No tiene acceso a ver las notas de este estudiante.");
			}

			// Obtener las notas del estudiante
			var grades = await _gradeService.GetGradesByStudentIdAsync(studentId);
			if (grades == null || !grades.Any())
			{
				throw new KeyNotFoundException($"No se encontraron notas para el estudiante con ID: {studentId}.");
			}

			return new ParentDashboardDto
			{
				StudentId = studentId,
				Grades = grades.Select(g => new GradeDto
				{
					GradeValue = g.GradeValue,
					EvaluationDate = g.EvaluationDate
				}).ToList()
			};
		}

	}
}
