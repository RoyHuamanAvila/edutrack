using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Services;
using System.Security.Claims;

namespace PlataformaSeguimientoEducativo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentService _studentService;
        private readonly IUserService _userService;

        public StudentsController(IStudentService studentService, IUserService userService)
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

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto registerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var newStudent = await _studentService.Register(registerDto);
                return CreatedAtAction(nameof(GetStudent), new { id = newStudent.UserId }, newStudent);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudent(int id)
        {
            var student = await _studentService.GetById(id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            var student = await _studentService.GetAllWithUserAsyn();
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }
    }
}
