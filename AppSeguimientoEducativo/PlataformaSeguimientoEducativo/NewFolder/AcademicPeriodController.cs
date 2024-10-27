﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlataformaSeguimientoEducativo.Data;
using PlataformaSeguimientoEducativo.DTOs;


namespace PlataformaSeguimientoEducativo.NewFolder
{
	[Route("api/[controller]")]
	[ApiController]
	public class AcademicPeriodController : ControllerBase
	{
		private readonly PSEduDbContext _context;

		public AcademicPeriodController(PSEduDbContext context)
		{
			_context = context;
		}
		// GET
		[HttpGet("academicperiod")]
		public async Task<ActionResult<IEnumerable<AcademicPeriodDto>>> GetAll()
		{
			var academicPeriods = await _context.AcademicPeriods
				.Include(ap => ap.Courses)
				.Select(a => new AcademicPeriodDto
				{
					AcademicPeriodId = a.AcademicPeriodId,
					PeriodName = a.PeriodName,
					Courses = a.Courses.Select(c => new CourseDto
					{
						CourseId = c.CourseId,
						CourseName = c.CourseName
					}).ToList()
				})
				.ToListAsync();

			return Ok(academicPeriods);
		}

	}
}