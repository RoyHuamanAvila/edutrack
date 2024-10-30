import useDropdown from "../../../hooks/useDropdown";
import CommentCard from "./CommentCard";

const listPeriod = ["2024-3", "2024-2", "2024-1"];

const TeacherCommentsSection = ({ teachers }) => {
  const { DropdownComponent: DropdownComentarios } = useDropdown(
    "Comentarios",
    "Comentarios",
    listPeriod
  );
  return (
    <section>
      <section className="space-y-4 pt-20 pb-10" >
        <h2 className="text-h3 font-bold text-center">
          Comentarios de los docentes
        </h2>
        <p className="text-sm text-center max-w-[592px] m-auto">
          En esta sección encontrará los comentarios y la retroalimentación
          proporcionada por los docentes. Aquí podrá revisar observaciones
          detalladas sobre el desempeño, áreas de mejora y recomendaciones.
        </p>
      </section >

      <section className="py-8">
        {/* Dropdown periodo escolar */}
        <div className="w-full flex justify-center mb-14">
          <DropdownComentarios>Periodo</DropdownComentarios>
        </div>

        {/* Lista de comentarios */}
        <div className="grid grid-cols-2 gap-8 px-[104px]">
          {
            teachers.map((teacher, index) => <CommentCard key={index} teacher={teacher} />)
          }
        </div>
      </section>
    </section>
  )
}
export default TeacherCommentsSection
