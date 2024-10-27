using System.Text.Json.Serialization;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class StudentInfoDto
    {
        [JsonPropertyName("studentId")]
        public int StudentId { get; set; }

        [JsonPropertyName("studentName")]
        public string StudentName { get; set; }

        [JsonPropertyName("tutor")]
        public Dictionary<string, string> Tutor { get; set; } = new();

        [JsonPropertyName("Courses")]
        public List<CourseDto> Courses { get; set; }
    }
}
