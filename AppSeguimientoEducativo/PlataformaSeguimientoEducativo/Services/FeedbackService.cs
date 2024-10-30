using PlataformaSeguimientoEducativo.DTOs;
using PlataformaSeguimientoEducativo.Models;
using PlataformaSeguimientoEducativo.Repositories;

namespace PlataformaSeguimientoEducativo.Services
{
    public class FeedbackService : IFeedbackService
    {
        private readonly IUnitOfWork _unitOfWork;
        public FeedbackService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        //Obtener los feedbacks por curso e id de estudiante
        public async Task<Feedback> AddFeedback(FeedbackCreateDto feedbackCreateDto)
        {
            var newFeedback = new Feedback
            {
                StudentId = feedbackCreateDto.StudentId,
                TeacherId = feedbackCreateDto.TeacherId,
                CourseId = feedbackCreateDto.CourseId,
                FeedbackText = feedbackCreateDto.FeedbackText,
                FeedbackDate = DateTime.Now,
            };
            await _unitOfWork.Feedbacks.AddFeedBackAsync(newFeedback);
            await _unitOfWork.CompleteAsync();
            return newFeedback;
        }
        public async Task<Feedback> UpdateFeedback(FeedbackCreateDto feedbackCreateDto)
        {
            var feedbackToUpdate = await _unitOfWork.Feedbacks.GetByIdAsync(feedbackCreateDto.FeedbackId);
            feedbackToUpdate.StudentId = feedbackCreateDto.StudentId;
            feedbackToUpdate.TeacherId = feedbackCreateDto.TeacherId;
            feedbackToUpdate.CourseId = feedbackCreateDto.CourseId;
            feedbackToUpdate.FeedbackText = feedbackCreateDto.FeedbackText;
            feedbackToUpdate.FeedbackDate = feedbackToUpdate.FeedbackDate;
            await _unitOfWork.CompleteAsync();
            return feedbackToUpdate;
        }

        public async Task<IEnumerable<FeedbackCreateDto>> GetFeedbacksByStudentIdAndCourseIdAsync(int studentId, int courseId)
        {
            try
            {
                var feedbacks = await _unitOfWork.Feedbacks.GetFeedbacksByStudentIdAndCourseIdAsync(studentId, courseId);

                var feedbackDtos = feedbacks.Select(f => new FeedbackCreateDto
                                                        {       
                                                            FeedbackId = f.FeedbackId,
                                                            StudentId = f.StudentId,
                                                            TeacherId= f.TeacherId,
                                                            CourseId = f.CourseId,
                                                            FeedbackText= f.FeedbackText,
                                                            FeedbackDate = f.FeedbackDate
                                                        }
                                                    ).ToList();

                return feedbackDtos;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error al obtener los feedbacks del estudiante {studentId}", ex);
            }
        }
    }
}
