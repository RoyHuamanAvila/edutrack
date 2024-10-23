﻿using PlataformaSeguimientoEducativo.DTOs;

namespace PlataformaSeguimientoEducativo.NewFolder
{
	public class AcademicPeriodDto
	{
		public int AcademicPeriodId { get; set; }
		public string PeriodName { get; set; }
		public List<CourseDto> Courses { get; set; }
	}
}