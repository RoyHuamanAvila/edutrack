namespace PlataformaSeguimientoEducativo.DTOs
{
    public class FeedbackCreateDto
    {
        public int FeedbackId { get; set; }
        public int StudentId { get; set; }
        public int TeacherId { get; set; }
        public int CourseId { get; set; }
        public required string FeedbackText { get; set; }
        public DateTime FeedbackDate{ get; set; } = DateTime.Now;
    }
}
