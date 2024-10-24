using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface ICourseService
    {
        Task<IEnumerable<Course>> GetAllAsync();
        Task<Course> GetByIdAsync(int id);
        Task<CourseCreateDto> AddAsync(CourseCreateDto courseDto);
        Task<Course> UpdateAsync(int id, Course courseDto);
        Task<bool> DeleteAsync(int id);
    }
}
