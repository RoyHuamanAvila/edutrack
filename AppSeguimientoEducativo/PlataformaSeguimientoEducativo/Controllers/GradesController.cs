using Microsoft.AspNetCore.Authorization;
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

		[Authorize(Roles = "Teacher")]
		[HttpPost("{studentId}")]
		public async Task<IActionResult> AddGrade(int studentId, [FromBody] GradeDto gradeDto)
		{
			if (gradeDto == null)
				return BadRequest("Los datos de la calificación son necesarios.");

			var result = await _gradeService.AddGradeByStudentIdAsync(studentId, gradeDto);

			return CreatedAtAction(nameof(AddGrade), new { studentId, gradeId = result.CourseId }, result);
		}
	}
}
