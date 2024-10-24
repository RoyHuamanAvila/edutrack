const CommentCard = ({ name, asignatura, comment, date, img }) => {
  return (
    <div className="card border w-full border-brand-primary space-y-[13px] py-8 px-6 rounded-[22px] mx-auto bg-white bg-white-2">
      {/* Info del docente */}
      <div className="flex gap-[15px] items-center">
        <div className="size-[66px] rounded-lg border border-brand-primary bg-gray-300 overflow-hidden">
          <img src={img} alt="Foto del perfil del docente" />
        </div>
        <div className="space-y-2">
          <p className="font-bold text-brand-primary">{name}</p>
          <p className="text-grey-1 font-bold text-sm">
            {asignatura} <br />
            {date}
          </p>
        </div>
      </div>

      {/* Comentario */}
      <p className="text-sm">
        {comment}
      </p>
    </div>
  )
}
export default CommentCard
