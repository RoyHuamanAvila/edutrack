using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public class FeedbackRepository : Repository<Feedback>, IFeedbackRepository
	{
		private readonly PSEduDbContext _context;

		public FeedbackRepository(PSEduDbContext context) : base(context)
		{
			_context = context;
		}
		public async Task<List<Feedback>> GetFeedbacksByStudentIdAndCourseIdAsync(int studentId, int courseId)
		{
			var query = _context.Feedbacks.AsQueryable();

            // Filtrar por estudiante
            if (studentId is not 0)
                query = query.Where(f => f.StudentId == studentId);

			// Filtrar opcionalmente por CourseId y PeriodId
			if (courseId is not 0)
				query = query.Where(f => f.CourseId == courseId);

			return await query.ToListAsync();
		}
		public async Task<Feedback> AddFeedBackAsync(Feedback feedback)
		{
			await _context.Feedbacks.AddAsync(feedback);
			return feedback;
		}
	}
}
