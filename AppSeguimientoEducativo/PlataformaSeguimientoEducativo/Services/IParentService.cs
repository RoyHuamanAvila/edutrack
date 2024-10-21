using PlataformaSeguimientoEducativo.DTOs;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface IParentService
    {
        Task<ParentDashboardDto> GetDashboardForParentAsync(int parentId, int studentId);
    }
}
