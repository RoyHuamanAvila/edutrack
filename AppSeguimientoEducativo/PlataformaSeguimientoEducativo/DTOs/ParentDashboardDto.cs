using System.Text.Json.Serialization;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class ParentDashboardDto
    {
        [JsonPropertyName("parentId")]
        public int ParentId { get; set; }

        [JsonPropertyName("parentName")]
        public string ParentName { get; set; }

        [JsonPropertyName("parentRole")]
        public string ParentRole { get; set; }

        [JsonPropertyName("students")]
        public List<StudentInfoDto> Students { get; set; }

    }
}