using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Services;

namespace PlataformaSeguimientoEducativo.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ParentsController : ControllerBase
	{
		private readonly IParentService _parentService;

		public ParentsController(IParentService parentService)
		{
			_parentService = parentService;
		}

		// Solo los usuarios con el rol "Parent" pueden acceder a este recurso
		[Authorize(Roles = "Parent")]
		[HttpGet("{parentId}/student/{studentId}/grades")]
		public async Task<IActionResult> GetGradesForParent(int parentId, int studentId)
		{
			try
			{
				var dashboard = await _parentService.GetStudentGradesForParentAsync(parentId, studentId);
				return Ok(dashboard);
			}
			catch (UnauthorizedAccessException ex)
			{
				return Forbid(ex.Message); // Retorna un 403 Forbidden si no tiene acceso
			}
			catch (KeyNotFoundException ex)
			{
				return NotFound(ex.Message); // Retorna un 404 si no encuentra las notas o usuario
			}
		}
	}
}
