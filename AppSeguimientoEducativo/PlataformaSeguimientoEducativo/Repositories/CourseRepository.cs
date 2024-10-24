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
        public async Task<Course> GetFullByIdAsync(int id)
        {
            return await _context.Courses
                    .Include(c => c.Teacher)
                        .ThenInclude(t=>t.User)
                    .Include(c => c.AcademicPeriod)
                    .FirstOrDefaultAsync(c => c.CourseId == id);
        }
        public async Task<IEnumerable<Course>> GetAllAsync()
        {
            return await _context.Courses
                    .Include(c => c.Teacher)
                        .ThenInclude(t => t.User)
                    .Include(c => c.AcademicPeriod)
                    .ToListAsync();
        }
        public async Task<Course> AddAsync(Course course)
        {
            await _context.Courses.AddAsync(course);
            await _context.SaveChangesAsync();
            return course;
        }
        public async Task<Course> UpdateAsync(Course course)
        {
            _context.Courses.Update(course);
            await _context.SaveChangesAsync();
            return course;
        }
        public async Task<bool> DeleteAsync(int id)
        {
            var course = await GetByIdAsync(id);
            if (course == null) return false;

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
