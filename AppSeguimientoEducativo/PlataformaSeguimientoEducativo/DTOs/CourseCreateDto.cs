namespace PlataformaSeguimientoEducativo.DTOs
{
    public class CourseCreateDto
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public int TeacherId { get; set; }
        public int AcademicPeriodId { get; set; }
        public string Grade { get; set; }
    }
}
