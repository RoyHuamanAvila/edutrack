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

        [HttpGet("courses/students/{studentId}/grades")]
        public async Task<IActionResult> GetGradesByStudentId(int studentId)
        {
            try
            {
                var grades = await _gradeService.GetGradesByStudentIdAsync(studentId);

                if (grades == null || !grades.Any())
                {
                    return NotFound(new { message = $"No se encontraron notas para el estudiante con ID: {studentId}." });
                }

                return Ok(grades);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Ocurrió un error en el servidor.", error = ex.Message });
            }
        }


        [Authorize(Roles = "Teacher")]
        [HttpPost("courses/students/{studentId}/grades")]
        public async Task<IActionResult> AddGrade(int studentId, [FromBody] GradeDto gradeDto)
        {
            try
            {
                if (gradeDto == null)
                    return BadRequest("Los datos de la calificación son necesarios.");

                var result = await _gradeService.AddGradeByStudentIdAsync(studentId, gradeDto);

                return CreatedAtAction(nameof(AddGrade), new { studentId, gradeId = result.GradeId },
                    new { message = "Nota agregada con éxito.", grade = result });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Ocurrió un error en el servidor.", error = ex.Message });
            }
        }

        [Authorize(Roles = "Teacher")]
        [HttpPut("courses/students/{studentId}/grades")]
        public async Task<IActionResult> UpdateGrade(int studentId, [FromBody] UpdateGradeDto updateGradeDto)
        {
            try
            {
                await _gradeService.UpdateGradeByStudentIdAsync(studentId, updateGradeDto);
                return Ok(new { message = "Nota actualizada con éxito." });
            }

            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }

            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Ocurrió un error en el servidor.", error = ex.Message });
            }
        }
    }
}
