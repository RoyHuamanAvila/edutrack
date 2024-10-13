using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class User
    {
        public User()
        {
            SentCommunications = new HashSet<Communication>();
            ReceivedCommunications = new HashSet<Communication>();
        }
        public int UserId { get; set; }

        [Required]
        [StringLength(100)]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }

        public string ProfileImageUrl { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        [Phone]
        [StringLength(20)]
        public string? PhoneNumber { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }
        public ICollection<Communication> SentCommunications { get; set; }
        public ICollection<Communication> ReceivedCommunications { get; set; }
    }
}
