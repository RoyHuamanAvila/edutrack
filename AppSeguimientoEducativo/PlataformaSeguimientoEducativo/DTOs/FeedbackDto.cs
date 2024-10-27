namespace PlataformaSeguimientoEducativo.DTOs
{
    public class FeedbackDto
    {
        public string FeedbackText { get; set; }
        public string TeacherName { get; set; }
        public string TeacherProfileImageUrl { get; set; } 
        public string Subject { get; set; }
        public DateTime FeedbackDate { get; set; }
        public decimal GradeValue { get; set; }
    }
}
