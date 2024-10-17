using PlataformaSeguimientoEducativo.Data;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly PSEduDbContext _context;

        public IUserRepository Users { get; private set; }
        public IRoleRepository Roles { get; private set; }
        public IStudentRepository Students { get; private set; }
        public ICourseRepository Courses { get; private set; }
        //public ITeacherRepository Teachers { get; private set; }
        public IGradeRepository Grades { get; private set; }
		public IParentRepository Parents { get; private set; }

		public UnitOfWork(PSEduDbContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            Roles = new RoleRepository(_context);
            Students = new StudentRepository(_context);
            Courses = new CourseRepository(_context);
			Grades = new GradeRepository(_context);
			Parents = new ParentRepository(_context);
		}

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
