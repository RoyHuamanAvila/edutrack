using System.Text.Json.Serialization;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class PeriodDto
    {
        [JsonPropertyName("periodName")]
        public string PeriodName { get; set; }

        [JsonPropertyName("Courses")]
        public List<CourseDto> Courses { get; set; }

    }
}
