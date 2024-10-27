using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;
using PlataformaSeguimientoEducativo.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace PlataformaSeguimientoEducativo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IUnitOfWork _unitOfWork;

        public UsersController(IUserService userService, IUnitOfWork unitOfWork)
        {
            _userService = userService;
            _unitOfWork = unitOfWork;
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
                var createdUser = await _userService.RegisterUserAsync(registerDto);
                return CreatedAtAction(nameof(GetUser), new { id = createdUser.UserId }, createdUser);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var token = await _userService.LoginAsync(loginDto);
                return Ok(new { token });
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpPut("profile")]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileDto updateProfileDto)
        {
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value ??
                            User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;

            if (string.IsNullOrEmpty(userEmail))
            {
                return BadRequest("Incapaz de identificar a la usuario.");
            }

            try
            {
                var updatedUser = await _userService.UpdateProfileAsync(userEmail, updateProfileDto);
                return Ok(new
                {
                    updatedUser.UserId,
                    updatedUser.FullName,
                    updatedUser.Email,
                    updatedUser.PhoneNumber,
                    updatedUser.ProfileImageUrl
                });
            }
            catch (KeyNotFoundException)
            {
                return NotFound("Usuario no encontrado.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Se produjo un error al actualizar el perfil.");
            }
        }

        [HttpPut("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto changePasswordDto)
        {
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value ??
                            User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;

            if (string.IsNullOrEmpty(userEmail))
            {
                var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
                {
                    return BadRequest("Identificador de usuario no válido");
                }

                try
                {
                    await _userService.ChangePasswordAsync(userId, changePasswordDto);
                    return Ok(new { message = "Contraseña cambiada exitosamente" });
                }
                catch (KeyNotFoundException)
                {
                    return NotFound("User not found");
                }
                catch (InvalidOperationException ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }

            try
            {
                await _userService.ChangePasswordAsync(userEmail, changePasswordDto);
                return Ok(new { message = "Contraseña cambiada exitosamente" });
            }
            catch (KeyNotFoundException)
            {
                return NotFound("Usuario no encontrado.");
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("roles")]
        public IActionResult GetRoles()
        {
            var roles = _unitOfWork.Roles.GetAll();
            return Ok(roles);
        }
    }
}
