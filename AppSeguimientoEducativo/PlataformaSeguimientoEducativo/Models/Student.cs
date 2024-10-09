using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class Student
    {
        public int StudentId { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public User User { get; set; }
        public string Grade { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public ICollection<Grade> Grades { get; set; }
        public ICollection<ParentStudent> ParentStudents { get; set; }
    }
}
