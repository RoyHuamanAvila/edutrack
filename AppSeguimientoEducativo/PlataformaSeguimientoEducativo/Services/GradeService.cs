using Microsoft.AspNetCore.Http.HttpResults;
using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;
using System.Linq.Expressions;

namespace PlataformaSeguimientoEducativo.Services
{
    public class GradeService : IGradeService
    {
        private readonly IUnitOfWork _unitOfWork;

        public GradeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // Obtener las notas por ID de estudiante
        public async Task<IEnumerable<GradeDto>> GetGradesByStudentIdAsync(int studentId, int? courseId = null, int? periodId = null)
        {
            try
            {
                var grades = await _unitOfWork.Grades.GetGradesByStudentId(studentId, courseId, periodId);

                var gradeDtos = grades.Select(g => new GradeDto
                {
                    GradeValue = g.GradeValue,
                    EvaluationDate = g.EvaluationDate,
                }).ToList();

                return gradeDtos;
            }

            catch (Exception ex)
            {
                throw new ApplicationException($"Error al obtener las notas del estudiante {studentId}", ex);
            }
        }

        // Agregar las notas por ID de estudiante
        public async Task<GradeDto> AddGradeByStudentIdAsync(int studentId, GradeDto gradeDto)
        {
            try
            {
                var grade = new Grade
                {
                    StudentId = studentId,
                    CourseId = gradeDto.CourseId,
                    GradeValue = gradeDto.GradeValue,
                    EvaluationDate = gradeDto.EvaluationDate
                };

                await _unitOfWork.Grades.AddGradesAsync(grade);
                await _unitOfWork.CompleteAsync();
                return gradeDto;
            }

            catch (Exception ex)
            {
                throw new ApplicationException($"Error al agregar las notas del estudiante {studentId}", ex);
            }

        }

        public async Task<GradeDto> UpdateGradeByStudentIdAsync(int studentId, UpdateGradeDto updateGradeDto)
        {
            try
            {
                var grade = await _unitOfWork.Grades.GetGradesByIdAsync(updateGradeDto.GradeId);

                if (grade == null || grade.StudentId != studentId)
                {
                    throw new KeyNotFoundException($"No se encontró una nota con ID {updateGradeDto.GradeId} para el estudiante {studentId}.");
                }

                grade.GradeValue = updateGradeDto.NewGradeValue;
                grade.EvaluationDate = updateGradeDto.EvaluationDate;

                await _unitOfWork.Grades.UpdateGradesAsync(grade);
                await _unitOfWork.CompleteAsync();

                return new GradeDto
                {
                    GradeValue = grade.GradeValue,
                    EvaluationDate = grade.EvaluationDate
                };
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error al actualizar la nota para el estudiante {studentId}", ex);
            }
        }

    }
}
