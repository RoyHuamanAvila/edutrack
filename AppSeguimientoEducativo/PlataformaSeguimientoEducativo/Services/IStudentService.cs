using PlataformaSeguimientoEducativo.DTOs;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface IStudentService
    {
        Task<StudentDashboardDto> GetStudentDashboardAsync(int userId);
    }
}
