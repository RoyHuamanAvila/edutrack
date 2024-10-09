using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class Parent
    {
        public int ParentId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<ParentStudent> ParentStudents { get; set; }
    }
}
