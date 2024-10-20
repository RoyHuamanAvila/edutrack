using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> GetByIdAsync(string userEmail);
        Task<User> GetUserByEmailAsync(string email);
        Task<User> GetUserWithRoleAsync(int id);
    }
}
