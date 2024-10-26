//import CommentCard from "../../components/CommentCard";
import useDropdown from "../../hooks/useDropdown";
import { arrayOf, number, shape, string } from 'prop-types';

const EstudianteView = ({ studentId, fullName, phoneNumber, courses, profileImageUrl, promedio }) => {
  const listPeriod = ["2024-3", "2024-2", "2024-1"];

  const { DropdownComponent: DropdownComentarios } = useDropdown(
    "Comentarios",
    "Comentarios",
    listPeriod
  );
  const { DropdownComponent: DropdownHistorial } = useDropdown(
    "Dropdown_Historial",
    "Dropdown_Historial",
    listPeriod
  );

  // Simulando la obtención de datos de un JSON
  /* const userData = {
    name: "Alberto Gutiérrez",
    id: "1194733861",
  }; */

  const Tabla1 = {
    colegio: "Colegio Alemán",
    periodo: "2024-3",
    tutor: "Hernando Gutierrez",
  };
  const Tabla2 = {
    curso: "11A Bachillerato",
    asignatura: "10",
    telefono: "3002773456",
  };

  return (
    <div className="max-w-[1281px] mx-auto">
      <div className="py-10 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Contenedor Izquierdo (Card 1) */}
          <div className="w-[592px] h-[174px] bg-white rounded-lg p-1 flex items-center border border-brand-primary">
            {/* Imagen a la izquierda */}
            <img
              src={profileImageUrl} // Asegúrate de que esta ruta sea correcta
              alt="Imagen"
              className="w-[200px] h-[170px] "
            />

            {/* Contenedor para el texto a la derecha */}
            <div className="p-4 flex-1 text-left">
              <h2 className="text-[24px] font-bold text-black">Estudiante</h2>
              <p className="text-[32px] text-brand-primary font-bold">
                {fullName}
              </p>
              <div className="flex items-center">
                <label className="text-[16px] font-bold">Id:</label>
                <span className="text-[16px] text-brand-primary pl-2 font-bold">
                  {studentId}
                </span>
              </div>
            </div>
          </div>

          {/* Contenedor Derecho (Card 2) */}
          <div className="w-full lg:w-[592px] grid grid-cols-3 gap-4 min-h-[174px] border border-brand-primary p-4 rounded-lg">
            {/* Encabezados */}
            <div className="font-bold">Institución</div>
            <div className="font-bold">Periodo Actual</div>
            <div className="font-bold">Tutor</div>

            {/* Datos */}
            <div>{Tabla1.colegio}</div>
            <div>{Tabla1.periodo}</div>
            <div>{Tabla1.tutor}</div>

            {/* Segunda fila de datos */}
            <div className="font-bold">Curso</div>
            <div className="font-bold">Asignatura</div>
            <div className="font-bold">Teléfono Tutor</div>

            <div>{Tabla2.curso}</div>
            <div>{Tabla2.asignatura}</div>
            <div>{phoneNumber}</div>
          </div>
        </div>
      </div>

      <section className="mx-auto">
        {/* Encabezado historial académico */}
        <div className="flex items-center justify-between mb-[10px]">
          <h2 className="text-h3 font-extrabold">Historial Académico</h2>
          <DropdownHistorial>Periodo</DropdownHistorial>
        </div>

        {/* Tabla de notas */}
        <table className="w-full text-center mb-[76px]">
          <thead className="text-black-2 font-bold">
            <tr className="rounded-lg overflow-hidden">
              <th className="bg-brand-secondary pl-[200px] py-6 rounded-s-lg">Asignatura</th>
              <th className="bg-brand-secondary py-6">Calificación</th>
              <th className="bg-brand-secondary pr-[200px] py-6 rounded-e-lg">Docente</th>
            </tr>
          </thead>
          <tbody>
            {courses?.map(({ courseName, grades, teacherName }, index) =>
              <tr className="even:bg-white-1 odd:bg-white-2 text-sm" key={index}>
                <td className="py-[25px] px-[10px] pl-[200px]">{courseName}</td>
                <td className="py-[25px] px-[10px]">{grades[0].gradeValue}</td>
                <td className="py-[25px] px-[10px] pr-[200px]">{teacherName}</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Promedio del periodo */}
        <section className="mx-auto w-max rounded-lg border-brand-primary border py-2 px-8">
          <span className="text-brand-primary font-bold text-lg">
            Promedio del Periodo {promedio}
          </span>
        </section>

        {/* Encabezado de los comentarios */}
        <section className="space-y-4 pt-20 pb-10">
          <h2 className="text-h3 font-bold text-center">
            Comentarios de los docentes
          </h2>
          <p className="text-sm text-center max-w-[592px] m-auto">
            En esta sección encontrará los comentarios y la retroalimentación
            proporcionada por los docentes. Aquí podrá revisar observaciones
            detalladas sobre el desempeño, áreas de mejora y recomendaciones.
          </p>
        </section>

        {/* Sección de comentarios */}
        <section className="py-8">
          {/* Dropdown periodo escolar */}
          <div className="w-full flex justify-center mb-14">
            <DropdownComentarios>Periodo</DropdownComentarios>
          </div>

          {/* Lista de comentarios */}
          <div className="grid grid-cols-2 gap-8 px-[104px]">
            {/* {comments.map((comment, index) => (
              <CommentCard key={index} {...comment} />
            ))} */}
          </div>
        </section>
      </section>
    </div>
  );
}

const gradesPropTypes = arrayOf(
  shape({
    gradeValue: number,
    evaluationDate: string,
    studentId: number,
    courseId: number
  })
)

const feedbackPropTypes = arrayOf(
  shape({
    feedbackText: string,
    teacherName: string,
    feedbackDate: string
  })
)

const coursesPropTypes = arrayOf(
  shape({
    courseId: number,
    courseName: string,
    teacherName: string,
    subject: string,
    academicPeriodName: string,
    grades: gradesPropTypes,
    feedbacks: feedbackPropTypes
  })
)

EstudianteView.propTypes = {
  studentId: number,
  fullName: string,
  role: string,
  grade: string,
  enrollmentDate: string,
  profileImageUrl: string,
  phoneNumber: string,
  courses: coursesPropTypes,
  promedio: number
}

export default EstudianteView;
