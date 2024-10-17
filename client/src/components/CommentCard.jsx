const CommentCard = ({ name, asignatura, comment, date }) => {
  return (
    <div className="space-y-[13px] p-[30px] w-[546px] rounded-[22px] mx-auto bg-white">
      {/* Info del docente */}
      <div className="flex gap-[15px] items-center">
        <div className="size-[68px] rounded-full bg-gray-300">
          <img src="..." alt="Foto del perfil del docente" />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-[#686666]">
            {asignatura} <br />
            {date}
          </p>
        </div>
      </div>

      {/* Comentario */}
      <p>
        {comment}
      </p>
    </div>
  )
}
export default CommentCard
