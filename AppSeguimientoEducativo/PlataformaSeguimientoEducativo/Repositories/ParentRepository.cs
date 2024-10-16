using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;
using System.Threading.Tasks;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public class ParentRepository : Repository<Parent>, IParentRepository
	{
		private readonly PSEduDbContext _context;

		public ParentRepository(PSEduDbContext context) : base(context)
		{
			_context = context;
		}

		public async Task<Parent> GetByIdAsync(int parentId)
		{
			return await _context.Set<Parent>().FindAsync(parentId);
		}

		public async Task<bool> HasAccessToStudentAsync(int parentId, int studentId)
		{
			return await _context.Set<ParentStudent>()
				.AnyAsync(ps => ps.ParentId == parentId && ps.StudentId == studentId);
		}
	}
}
