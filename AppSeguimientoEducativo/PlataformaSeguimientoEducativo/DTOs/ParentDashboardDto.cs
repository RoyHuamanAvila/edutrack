namespace PlataformaSeguimientoEducativo.DTOs
{
	public class ParentDashboardDto
	{
		public int StudentId { get; set; }
		public string FullName { get; set; }
		public List<GradeDto> Grades { get; set; }
		public List<CourseInfoDto> Courses { get; set; }
	}
}