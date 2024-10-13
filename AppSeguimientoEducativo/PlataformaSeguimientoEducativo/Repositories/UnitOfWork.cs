using PlataformaSeguimientoEducativo.Data;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly PSEduDbContext _context;

        public IUserRepository Users { get; private set; }
        public IRoleRepository Roles { get; private set; }

        public UnitOfWork(PSEduDbContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            Roles = new RoleRepository(_context);
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
