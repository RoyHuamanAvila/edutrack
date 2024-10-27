using System.Text.Json.Serialization;

namespace PlataformaSeguimientoEducativo.DTOs
{
    public class FeedbackDetailDto
    {
        [JsonPropertyName("feedbackText")]
        public string FeedbackText { get; set; }

        [JsonPropertyName("feedbackDate")]
        public string FeedbackDate { get; set; }
    }
}
