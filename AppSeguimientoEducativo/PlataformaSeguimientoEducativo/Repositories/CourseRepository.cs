using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public class CourseRepository : Repository<Course>, ICourseRepository
    {
        public CourseRepository(PSEduDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Course>> GetCoursesForStudentAsync(int studentId)
        {
            return await _context.Courses
                .Include(c => c.Teacher)
                    .ThenInclude(t => t.User)
                .Include(c => c.AcademicPeriod)
                .Include(c => c.Grades.Where(g => g.StudentId == studentId))
                .Include(c => c.Feedbacks.Where(f => f.StudentId == studentId))
                .Where(c => c.Grades.Any(g => g.StudentId == studentId))
                .ToListAsync();
        }
       
        public async Task<List<Course>> GetCoursesWithDetailsForStudentAsync(int studentId)
        {
            return await _context.Courses
                .Include(c => c.Teacher)
                    .ThenInclude(t => t.User)
                .Include(c => c.AcademicPeriod)
                .Include(c => c.Grades.Where(g => g.StudentId == studentId))
                .Include(c => c.Feedbacks.Where(f => f.StudentId == studentId))
                    .ThenInclude(f => f.Teacher)
                        .ThenInclude(t => t.User)
                .Where(c => c.Grades.Any(g => g.StudentId == studentId))
                .ToListAsync();
        }
    }
}
