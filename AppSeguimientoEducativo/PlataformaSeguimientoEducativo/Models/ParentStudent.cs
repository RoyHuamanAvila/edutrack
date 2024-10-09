using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class ParentStudent
    {
        public int ParentStudentId { get; set; }
        public int ParentId { get; set; }
        public Parent Parent { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
    }
}
