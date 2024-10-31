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

        // Obtener notas de un estudiante, con posibilidad de filtrado por curso y periodo
        public async Task<List<Grade>> GetGradesByStudentId(int studentId, int? courseId, int? AcademicPeriodId)
        {
            var query = _context.Grades.AsQueryable();

            // Filtrar por estudiante
            query = query.Where(g => g.StudentId == studentId);

            // Filtrar opcionalmente por CourseId y PeriodId
            if (courseId.HasValue)
                query = query.Where(g => g.CourseId == courseId.Value);

            if (AcademicPeriodId.HasValue)
                query = query.Where(g => g.Course.AcademicPeriod.AcademicPeriodId == AcademicPeriodId.Value);

            return await query.ToListAsync();
        }

        // Método para agregar una nota individual
        public async Task<Grade> AddGradesAsync(Grade grade)
        {
            await _context.Grades.AddAsync(grade);
            return grade;
        }

        // Metodo para Obtener notas de un estudiante por el Id
        public async Task<Grade> GetGradesByIdAsync(int gradeId)
        {
            return await _context.Grades.FirstOrDefaultAsync(g => g.GradeId == gradeId);
        }

        // Método para actualizar una nota
        public async Task<Grade> UpdateGradesAsync(Grade grade)
        {
            _context.Grades.Update(grade);
            await _context.SaveChangesAsync();
            return grade;
        }
    }
}
