namespace PlataformaSeguimientoEducativo.DTOs
{
	public class GradeDto
	{
		public decimal GradeValue { get; set; }
		public DateTime EvaluationDate { get; set; }
		public int StudentId { get; set; }
		public int CourseId { get; set; }
	}
}
