using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByEmailAsync(string email);
        Task<User> RegisterUserAsync(RegisterUserDto registerDto);
        Task<string> LoginAsync(LoginDto loginDto);

        Task<User> UpdateProfileAsync(string userEmail, UpdateProfileDto updateProfileDto);
        Task ChangePasswordAsync(string userEmail, ChangePasswordDto changePasswordDto);
        Task ChangePasswordAsync(int userId, ChangePasswordDto changePasswordDto);

        Task<StudentDashboardDto> GetStudentDashboardAsync(int userId);

    }
}
