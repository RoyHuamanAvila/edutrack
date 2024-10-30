using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Services;
using System.Security.Claims;

namespace PlataformaSeguimientoEducativo.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class FeedbacksController : ControllerBase
	{
		private readonly IFeedbackService _feedbackService;

		public FeedbacksController(IFeedbackService feedbackService)
		{
            _feedbackService = feedbackService;
		}
		[HttpGet("list/{courseId}/{studentId}")]
		public async Task<IActionResult> GetFeedbackByStudentIdAndCourseId(int courseId,int studentId)
		{
            var feedbacks = await _feedbackService.GetFeedbacksByStudentIdAndCourseIdAsync(studentId, courseId);
			if (feedbacks == null || !feedbacks.Any())
			{
				return NotFound($"No se encontraron feedbacks para el estudiante con ID: {studentId}.");
			}

			return Ok(feedbacks);
		}

		[Authorize(Roles = "Teacher")]
		[HttpPost("create")]
		public async Task<IActionResult> AddFeedback(FeedbackCreateDto feedbackCreateDto)
		{
			if (feedbackCreateDto == null)
				return BadRequest("Los datos de la calificación son necesarios.");

			var result = await _feedbackService.AddFeedback(feedbackCreateDto);

			return Ok(result);
		}
        [Authorize(Roles = "Teacher")]
        [HttpPut("update")]
        public async Task<IActionResult> UpdateFeedback(FeedbackCreateDto feedbackCreateDto)
        {
            if (feedbackCreateDto == null)
                return BadRequest("Los datos de la calificación son necesarios.");

            var result = await _feedbackService.UpdateFeedback(feedbackCreateDto);

            return Ok(result);
        }
    }
}
