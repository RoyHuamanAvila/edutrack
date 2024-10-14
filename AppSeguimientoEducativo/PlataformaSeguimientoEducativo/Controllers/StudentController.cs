using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Services;
using System.Security.Claims;

namespace PlataformaSeguimientoEducativo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        private readonly IUserService _userService;

        public StudentController(IStudentService studentService, IUserService userService)
        {
            _studentService = studentService;
            _userService = userService;
        }

        [Authorize(Roles = "Student")]
        [HttpGet("dashboard")]
        public async Task<ActionResult<StudentDashboardDto>> GetDashboard()
        {
           
            var email = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            
            var user = await _userService.GetUserByEmailAsync(email);
            if (user == null)
            {
                return NotFound("Usuario no encontrado.");
            }

            
            var userId = user.UserId;

            
            var dashboard = await _studentService.GetStudentDashboardAsync(userId);
            return Ok(dashboard);
        }
    }
}
