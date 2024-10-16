const CommentCard = () => {
  return (
    <div className="space-y-[13px] p-[30px] w-[546px] rounded-[22px] mx-auto">
      <div className="flex gap-[15px] items-center">
        <div className="size-[68px] rounded-full bg-gray-300"></div>
        <div>
          <p className="font-semibold">Nombre completo del docente</p>
          <p className="text-[#686666]">
            Asignatura <br />
            00/00/0000
          </p>
        </div>
      </div>
      <p>
        Este es un ejemplo de comentario donde el docente dejará observaciones detalladas sobre el desempeño, áreas de mejora y recomendaciones del docente.
      </p>
    </div>
  )
}
export default CommentCard
