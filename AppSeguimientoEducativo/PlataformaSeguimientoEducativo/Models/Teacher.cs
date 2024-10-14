using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class Teacher
    {
        public int TeacherId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string Subject { get; set; }
        public DateTime HireDate { get; set; }
        public ICollection<Course> Courses { get; set; }
        public ICollection<Feedback> Feedbacks { get; set; }
    }
}
