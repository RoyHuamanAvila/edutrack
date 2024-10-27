using System.Text.Json.Serialization;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class TeacherInfoDto
    {
        [JsonPropertyName("teacherName")]
        public string TeacherName { get; set; }
        [JsonPropertyName("profileImageUrl")]
        public string ProfileImageUrl { get; set; }

        [JsonPropertyName("subjectName")]
        public string SubjectName { get; set; }

        [JsonPropertyName("period")]
        public string Period { get; set; }

        [JsonPropertyName("gradeValue")]
        public decimal GradeValue { get; set; }

        [JsonPropertyName("feedback")]
        public FeedbackDetailDto Feedback { get; set; }
    }
}
