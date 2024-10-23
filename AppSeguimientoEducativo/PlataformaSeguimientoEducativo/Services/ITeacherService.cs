using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface ITeacherService
    {
        Task<Teacher> Register(RegisterUserDto registerUserDto);
        Task<Teacher> GetById(int id);
        Task<IEnumerable<Teacher>> GetAllWithUserAsyn();
        Task DeleteAsync(int studentId);
    }
}
