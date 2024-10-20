using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Models;

namespace PlataformaSeguimientoEducativo.Data
{
    public static class DbInitializer
    {
        public static void Initialize(PSEduDbContext context)
        {
            context.Database.Migrate();

            // Verificar si ya hay roles en la base de datos
            if (context.Roles.Any())
            {
                return; // La base de datos ya tiene roles
            }

            // Si no hay roles, agregar los roles predeterminados
            var roles = new List<Role>
                {
                    new Role { RoleName = "Admin" },
                    new Role { RoleName = "Student" },
                    new Role { RoleName = "Teacher" },
                    new Role { RoleName = "Parent" }
                };

            context.Roles.AddRange(roles);
            context.SaveChanges();
        }
    }
}
