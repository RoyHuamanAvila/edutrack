using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;

        public TeacherService(IUnitOfWork unitOfWork, IUserService userService)
        {
            _unitOfWork = unitOfWork;
            _userService = userService;
        }

        public async Task<Teacher> GetById(int id)
        {
            return await _unitOfWork.Teachers.GetByIdWithUserAsync(id);
        }
        public async Task<Teacher> Register(RegisterUserDto registerUserDto)
        {
            //reusando registerUserDto
            registerUserDto.RoleName = "Teacher";
            var user =  await _userService.RegisterUserAsync(registerUserDto);
            var teacher = new Teacher
            {
                Subject = "Campo que no se usara",
                HireDate = DateTime.Now,
                User = user
            };
            _unitOfWork.Teachers.Add(teacher);
            await _unitOfWork.CompleteAsync();
            return teacher;
        }
        public async Task<IEnumerable<Teacher>> GetAllWithUserAsyn()
        {
            var teachers = await _unitOfWork.Teachers.GetAllWithUserAsync();
            return teachers;
        }

        public async Task DeleteAsync(int teacherId)
        {
            await _unitOfWork.Teachers.DeleteAsync(teacherId);
        }
    }
}
