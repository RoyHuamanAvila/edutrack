namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        IRoleRepository Roles { get; }
        Task<int> CompleteAsync();
    }
}
