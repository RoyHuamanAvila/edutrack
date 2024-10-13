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

    }
}
