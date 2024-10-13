using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(PSEduDbContext context) : base(context)
        {
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _context.Users
                .Include(u => u.Role)
                .FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<User> GetUserWithRoleAsync(int id)
        {
            return await _context.Users
                .Include(u => u.Role)
                .FirstOrDefaultAsync(u => u.UserId == id);
        }
    }
}
