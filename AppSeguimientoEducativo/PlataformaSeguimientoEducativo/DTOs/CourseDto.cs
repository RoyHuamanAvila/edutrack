using System.Text.Json.Serialization;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class CourseDto
    {
        [JsonPropertyName("courseId")]
        public int CourseId { get; set; }

        [JsonPropertyName("courseName")]
        public string CourseName { get; set; }

        [JsonPropertyName("teachers")]
        public List<TeacherInfoDto> Teachers { get; set; }
    }
}

