using PlataformaSeguimientoEducativo.DTOs;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface IGradeService
    {
        Task<IEnumerable<GradeDto>> GetGradesByStudentIdAsync(int studentId, int? courseId = null, int? periodId = null);
        Task<GradeDto> AddGradeByStudentIdAsync(int studentId, GradeDto gradeDto);
        Task<GradeDto> UpdateGradeByStudentIdAsync(int studentId, UpdateGradeDto updateGradeDto);

    }
}
