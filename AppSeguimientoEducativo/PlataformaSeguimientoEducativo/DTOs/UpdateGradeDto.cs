namespace PlataformaSeguimientoEducativo.DTOs
{
    public class UpdateGradeDto
    {
        public int GradeId { get; set; }
        public decimal NewGradeValue { get; set; }
        public DateTime EvaluationDate { get; set; }
    }
}
