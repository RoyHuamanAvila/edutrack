using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public class StudentRepository : Repository<Student>, IStudentRepository
    {
        public StudentRepository(PSEduDbContext context) : base(context)
        {
        }
      
        public async Task<Student> GetByUserIdAsync(int userId)
        {
            return await _context.Students
                .FirstOrDefaultAsync(s => s.UserId == userId);
        }

        public async Task<Student> GetByUserIdWithDetailsAsync(int userId)
        {
            return await _context.Students
               .Include(s => s.User)
                   .ThenInclude(u => u.Role)
               .Include(s => s.Grades)
               .Include(s => s.Feedbacks)
               .FirstOrDefaultAsync(s => s.UserId == userId);
        }
        public async Task<IEnumerable<Student>> GetAllWithUserAsync()
        {

            return await _context.Students
                .Include(s => s.User)
                    .ThenInclude(u => u.Role)
                .ToListAsync();
        }

        public async Task<Student> GetByIdWithUserAsync(int studentId)
        {
            return await _context.Students
                .Include(s => s.User)
                    .ThenInclude(u => u.Role)
                .FirstOrDefaultAsync(s => s.StudentId == studentId);
        }
    }
}
