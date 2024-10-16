using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PlataformaSeguimientoEducativo.Repositories
{
	public class GradeRepository : Repository<Grade>, IGradeRepository
	{
		private readonly PSEduDbContext _context;

		public GradeRepository(PSEduDbContext context) : base(context)
		{
			_context = context;
		}

		public async Task<List<Grade>> GetGradesByStudentIdAsync(int studentId)
		{
			return await _context.Set<Grade>()
				.Where(g => g.StudentId == studentId)
				.ToListAsync(); // Retornar la lista de notas del estudiante
		}
	}
}