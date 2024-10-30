
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public interface IFeedbackRepository : IRepository<Feedback>
	{
		Task<List<Feedback>> GetFeedbacksByStudentIdAndCourseIdAsync(int studentId, int courseId);
		Task<Feedback> AddFeedBackAsync(Feedback grade);
	}
}