using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Data
{
    public class PSEduDbContext : DbContext
    {
        public PSEduDbContext(DbContextOptions<PSEduDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<AcademicPeriod> AcademicPeriods { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<ParentStudent> ParentStudents { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Communication> Communications { get; set; }
        public DbSet<Notification> Notifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuración existente
            modelBuilder.Entity<Grade>()
                .Property(g => g.GradeValue)
                .HasPrecision(5, 2);

            // Configuración de Communication
            modelBuilder.Entity<Communication>()
                .HasOne(c => c.Sender)
                .WithMany(u => u.SentCommunications)
                .HasForeignKey(c => c.SenderId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Communication>()
                .HasOne(c => c.Receiver)
                .WithMany(u => u.ReceivedCommunications)
                .HasForeignKey(c => c.ReceiverId)
                .OnDelete(DeleteBehavior.Restrict);

            // Configuración adicional para otras relaciones

            // User - Role
            modelBuilder.Entity<User>()
                .HasOne(u => u.Role)
                .WithMany(r => r.Users)
                .HasForeignKey(u => u.RoleId);

            // Teacher - User
            modelBuilder.Entity<Teacher>()
                .HasOne(t => t.User)
                .WithOne()
                .HasForeignKey<Teacher>(t => t.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Student - User
            modelBuilder.Entity<Student>()
                 .HasOne(s => s.User)
                 .WithOne()
                 .HasForeignKey<Student>(s => s.UserId)
                 .OnDelete(DeleteBehavior.Restrict);

            // Parent - User
            modelBuilder.Entity<Parent>()
                .HasOne(p => p.User)
                .WithOne()
                .HasForeignKey<Parent>(p => p.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Course - Teacher
            modelBuilder.Entity<Course>()
                .HasOne(c => c.Teacher)
                .WithMany(t => t.Courses)
                .HasForeignKey(c => c.TeacherId);

            // Course - AcademicPeriod
            modelBuilder.Entity<Course>()
                .HasOne(c => c.AcademicPeriod)
                .WithMany(ap => ap.Courses)
                .HasForeignKey(c => c.AcademicPeriodId);

            // Grade - Student
            modelBuilder.Entity<Grade>()
                .HasOne(g => g.Student)
                .WithMany(s => s.Grades)
                .HasForeignKey(g => g.StudentId);

            // Grade - Course
            modelBuilder.Entity<Grade>()
                .HasOne(g => g.Course)
                .WithMany(c => c.Grades)
                .HasForeignKey(g => g.CourseId);

            // ParentStudent - configuración de la relación muchos a muchos

            modelBuilder.Entity<ParentStudent>()
                .HasKey(ps => new { ps.ParentId, ps.StudentId });

            modelBuilder.Entity<ParentStudent>()
                .HasOne(ps => ps.Parent)
                .WithMany(p => p.ParentStudents)
                .HasForeignKey(ps => ps.ParentId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ParentStudent>()
                .HasOne(ps => ps.Student)
                .WithMany(s => s.ParentStudents)
                .HasForeignKey(ps => ps.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            // Feedback - configuración
            modelBuilder.Entity<Feedback>()
        .HasOne(f => f.Course)
        .WithMany(c => c.Feedbacks)
        .HasForeignKey(f => f.CourseId)
        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Feedback>()
                .HasOne(f => f.Student)
                .WithMany(s => s.Feedbacks)
                .HasForeignKey(f => f.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Feedback>()
                .HasOne(f => f.Teacher)
                .WithMany(t => t.Feedbacks)
                .HasForeignKey(f => f.TeacherId)
                .OnDelete(DeleteBehavior.Restrict);

            // Notification - User
            modelBuilder.Entity<Notification>()
                .HasOne(n => n.User)
                .WithMany()
                .HasForeignKey(n => n.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Profile Image
            modelBuilder.Entity<User>()
               .Property(u => u.ProfileImageUrl)
               .HasMaxLength(255);
        }
    }
}
