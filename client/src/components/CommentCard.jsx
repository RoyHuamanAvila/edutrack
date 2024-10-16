const CommentCard = ({ name, asignatura, comment }) => {
  return (
    <div className="space-y-[13px] p-[30px] w-[546px] rounded-[22px] mx-auto">
      <div className="flex gap-[15px] items-center">
        <div className="size-[68px] rounded-full bg-gray-300"></div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-[#686666]">
            Asignatura <br />
            {asignatura}
          </p>
        </div>
      </div>
      <p>
        {comment}
      </p>
    </div>
  )
}
export default CommentCard
