import useDropdown from "../../../hooks/useDropdown";
import CommentCard from "./CommentCard";

const listPeriod = ["2024-3", "2024-2", "2024-1"];

const TeacherCommentsSection = ({ courses }) => {
  const { DropdownComponent: DropdownComentarios } = useDropdown(
    {
      id: "Comentarios",
      name: "Comentarios",
      options: listPeriod
    }
  );
  return (
    <section>
      <section className="space-y-4 pt-20 pb-10" >
        <h2 className="text-h3 font-bold text-center">
          Comentarios de los docentes
        </h2>
        <p className="text-center max-w-[816px] m-auto">
          En esta sección encontrará los comentarios y la retroalimentación
          proporcionada por los docentes. Aquí podrá revisar observaciones
          detalladas sobre el desempeño, áreas de mejora y recomendaciones.
        </p>
      </section >

      <section className="py-8">
        {/* Dropdown periodo escolar */}
        <div className="w-full flex justify-center mb-14">
          <DropdownComentarios className='dropdown'>Periodo</DropdownComentarios>
        </div>

        {/* Lista de comentarios */}
        <div className="grid grid-cols-2 gap-8 px-[104px]">
          {
            courses?.map((course, index) => <CommentCard key={index} teacher={course.teachers[0]} />)
          }
        </div>
      </section>
    </section>
  )
}
export default TeacherCommentsSection
