using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.NewFolder;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
    public class CourseService : ICourseService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CourseService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<Course>> GetAllAsync()
        {
            var courses = await _unitOfWork.Courses.GetAllAsync();
            return courses;
        }
        public async Task<Course> GetByIdAsync(int id)
        {
            return await _unitOfWork.Courses.GetFullByIdAsync(id);
        }
        public async Task<CourseCreateDto> AddAsync(CourseCreateDto courseDto)
        {
            var course = new Course
            {
                CourseName = courseDto.CourseName,
                Grade = courseDto.Grade,
                TeacherId = courseDto.TeacherId,
                AcademicPeriodId = courseDto.AcademicPeriodId
            };
            var createdCourse = await _unitOfWork.Courses.AddAsync(course);
            return new CourseCreateDto
            {
                Id = createdCourse.CourseId,
                CourseName = createdCourse.CourseName,
                Grade = createdCourse.Grade,
                TeacherId = createdCourse.TeacherId,
                AcademicPeriodId = createdCourse.AcademicPeriodId
            };
        }
        public async Task<Course> UpdateAsync(int id, Course course)
        {
            throw new NotImplementedException();
        }
        public async Task<bool> DeleteAsync(int id)
        {
            return await _unitOfWork.Courses.DeleteAsync(id);
        }
    }
}
