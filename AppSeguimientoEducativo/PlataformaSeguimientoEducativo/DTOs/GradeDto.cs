﻿using PlataformaSeguimientoEducativo.Models;namespace PlataformaSeguimientoEducativo.DTOs{
    public class GradeDto
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int PeriodId { get; set; }
        public int GradeId { get; set; }
        public decimal GradeValue { get; set; }
        public DateTime EvaluationDate { get; set; }

    }}