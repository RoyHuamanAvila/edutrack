const CommentCard = ({ teacher }) => {
  return (
    <div className="card border w-full border-brand-primary space-y-[13px] py-8 px-6 rounded-[22px] mx-auto bg-white bg-white-2">
      {/* Info del docente */}
      <div className="flex gap-[15px] items-center">
        <div className="size-[66px] rounded-lg border border-brand-primary bg-gray-300 overflow-hidden">
          <img src={teacher?.profileImageUrl} alt="Foto del perfil del docente" />
        </div>
        <div className="space-y-2">
          <p className="text-xl font-bold text-brand-primary">{teacher?.teacherName}</p>
          <p className="text-grey-1 font-bold">
            {teacher?.subjectName} <br />
            {teacher?.feedback?.feedbackDate}
          </p>
        </div>
      </div>

      {/* Comentario */}
      <p className="text-black-2">
        {teacher?.feedback?.feedbackText}
      </p>
    </div>
  )
}
export default CommentCard
