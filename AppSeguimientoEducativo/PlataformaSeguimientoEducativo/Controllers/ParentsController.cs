using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Services;
using System.Security.Claims;

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

        [Authorize(Roles = "Parent")]
        [HttpGet("{parentId}")]
        public async Task<ActionResult<ParentDashboardDto>> Get(int parentId, [FromQuery] int studentId)
        {
            var parentDashboard = await _parentService.GetDashboardForParentAsync(parentId, studentId);
            if (parentDashboard == null)
            {
                return NotFound();
            }

            return Ok(parentDashboard);
        }
    }
}
