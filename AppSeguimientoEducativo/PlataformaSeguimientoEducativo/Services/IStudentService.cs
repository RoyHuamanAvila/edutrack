using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface IStudentService
    {
        Task<StudentDashboardDto> GetStudentDashboardAsync(int userId);
        Task<Student> Register(RegisterUserDto registerUserDto);
        Task<Student> GetById(int id);
        Task<IEnumerable<Student>> GetAllWithUserAsyn();
        Task DeleteStudentAsync(int studentId);
    }
}
