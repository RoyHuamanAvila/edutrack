namespace PlataformaSeguimientoEducativo.DTOs
{
    public class CourseInfoDto
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string TeacherName { get; set; }
        public string ProfileImagenUrl { get; set; }
        public string Subject { get; set; }
        public string AcademicPeriodName { get; set; }
        public List<GradeDto> Grades { get; set; }
        public List<FeedbackDto> Feedbacks { get; set; }
    }
}
