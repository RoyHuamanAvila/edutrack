using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Services;

namespace PlataformaSeguimientoEducativo.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class GradesController : ControllerBase
	{
		private readonly IGradeService _gradeService;

		public GradesController(IGradeService gradeService)
		{
			_gradeService = gradeService;
		}

		// Obtener todas las notas de un estudiante
		[HttpGet("student/{studentId}")]
		public async Task<IActionResult> GetGradesByStudentId(int studentId)
		{
			var grades = await _gradeService.GetGradesByStudentIdAsync(studentId);
			if (grades == null || !grades.Any())
			{
				return NotFound($"No se encontraron notas para el estudiante con ID: {studentId}.");
			}

			return Ok(grades);
		}
	}
}
