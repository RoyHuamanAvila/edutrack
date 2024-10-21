namespace PlataformaSeguimientoEducativo.DTOs
{
    public class ParentDashboardDto
    {
        public int ParentId { get; set; }
        public string ParentName { get; set; }
        public string ParentRole { get; set; }
        public DateTime ParentEnrollmentDate { get; set; }
        public List<StudentDashboardDto> Students { get; set; }
    }
}