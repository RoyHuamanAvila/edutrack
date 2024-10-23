using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Services;

namespace PlataformaSeguimientoEducativo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        private readonly ITeacherService _teacherService;
        private readonly IUserService _userService;

        public TeachersController(ITeacherService teacherService, IUserService userService)
        {
            _teacherService = teacherService;
            _userService = userService;
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
                var newTeacher = await _teacherService.Register(registerDto);
                return CreatedAtAction(nameof(GetTeacher), new { id = newTeacher.UserId }, newTeacher);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTeacher(int id)
        {
            var teacher = await _teacherService.GetById(id);
            if (teacher == null)
            {
                return NotFound();
            }
            return Ok(teacher);
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetStudents()
        {
            var teachers = await _teacherService.GetAllWithUserAsyn();
            return Ok(teachers);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            await _teacherService.DeleteAsync(id);
            return NoContent();
        }
    }
}
