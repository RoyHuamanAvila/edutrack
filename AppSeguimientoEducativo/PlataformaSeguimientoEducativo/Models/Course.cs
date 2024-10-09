using System.Diagnostics;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        public int AcademicPeriodId { get; set; }
        public AcademicPeriod AcademicPeriod { get; set; }
        public string Grade { get; set; }
        public ICollection<Grade> Grades { get; set; }
    }
}
