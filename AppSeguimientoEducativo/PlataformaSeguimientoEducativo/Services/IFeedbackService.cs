using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Services
{
    public interface IFeedbackService
    {
        Task<IEnumerable<FeedbackCreateDto>> GetFeedbacksByStudentIdAndCourseIdAsync(int studentId, int courseId);
        Task<Feedback> AddFeedback(FeedbackCreateDto feedbackCreateDto);
        Task<Feedback> UpdateFeedback(FeedbackCreateDto feedbackCreateDto);
    }
}
