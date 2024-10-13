using System.ComponentModel.DataAnnotations;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class RegisterUserDto
    {
        [Required(ErrorMessage = "El nombre completo es requerido.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "El email es requerido")]
        [EmailAddress(ErrorMessage = "Direccion de email invalido.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "La contraseña es requerida")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "La contraseña tiene que tener un minimo de 6 caracteres.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "El Rol es requerido.")]
        public string RoleName { get; set; }
    }
}