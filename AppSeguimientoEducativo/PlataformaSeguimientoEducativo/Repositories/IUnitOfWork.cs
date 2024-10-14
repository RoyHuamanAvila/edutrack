namespace PlataformaSeguimientoEducativo.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        IRoleRepository Roles { get; }
        IStudentRepository Students { get; }
        ICourseRepository Courses { get; }
        Task<int> CompleteAsync();
    }
}
