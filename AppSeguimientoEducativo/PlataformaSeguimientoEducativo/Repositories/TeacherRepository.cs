using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public class TeacherRepository : Repository<Teacher>, ITeacherRepository
    {
        public TeacherRepository(PSEduDbContext context) : base(context)
        {
        }
        public async Task<IEnumerable<Teacher>> GetAllWithUserAsync()
        {
            return await _context.Teachers
                        .Include(t=> t.User)
                            .ThenInclude(t=>t.Role)
                        .ToListAsync();
        }
        public async Task<Teacher> GetByIdWithUserAsync(int teacherId)
        {
            return await _context.Teachers
                        .Include(t => t.User)
                            .ThenInclude(t => t.Role)
                        .FirstOrDefaultAsync(t => t.TeacherId == teacherId);
        }
        public async Task DeleteAsync(int teacherId)
        {
            var teacher = await _context.Teachers.FindAsync(teacherId);
            if (teacher != null)
            {
                _context.Teachers.Remove(teacher);
                await _context.SaveChangesAsync();
            }
        }
    }
}
