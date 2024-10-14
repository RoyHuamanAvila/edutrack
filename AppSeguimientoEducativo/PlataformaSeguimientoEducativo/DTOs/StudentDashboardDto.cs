namespace PlataformaSeguimientoEducativo.DTOs
{
    public class StudentDashboardDto
    {
        public int StudentId { get; set; }
        public string FullName { get; set; }
        public string Role { get; set; }
        public string Grade { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public List<CourseInfoDto> Courses { get; set; }
    }
}
