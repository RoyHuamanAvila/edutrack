using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public class ParentRepository : Repository<Parent>, IParentRepository
	{
		public ParentRepository(PSEduDbContext context) : base(context)
		{
		}

		public async Task<ParentStudent> GetParentByIdAsync(int parentId)
		{
			return await _context.ParentStudents
				.FirstOrDefaultAsync(p => p.ParentId == parentId);
		}

		public async Task<ParentStudent> GetParentStudentDetailsAsync(int studentId, int parentId)
		{
			return await _context.ParentStudents
				.Include(s => s.Student.Grades)
				.Include(s => s.Parent)
				.SingleOrDefaultAsync(s => s.StudentId == studentId && s.ParentId == parentId);
		}
	}
}
