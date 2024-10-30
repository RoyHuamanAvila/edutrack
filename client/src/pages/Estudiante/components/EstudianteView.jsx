import AcademicHistoryContainer from "../containers/AcademicHistoryContainer";
import TeacherCommentsSection from "./TeacherCommentsSection";

const EstudianteView = ({ user, courses }) => {
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
              src={user?.profileImageUrl} // Asegúrate de que esta ruta sea correcta
              alt="Imagen"
              className="w-[200px] h-[170px] "
            />

            {/* Contenedor para el texto a la derecha */}
            <div className="p-4 flex-1 text-left">
              <h2 className="text-[24px] font-bold text-black">Estudiante</h2>
              <p className="text-[32px] text-brand-primary font-bold">
                {user?.fullName}
              </p>
              <div className="flex items-center">
                <label className="text-[16px] font-bold">Id:</label>
                <span className="text-[16px] text-brand-primary pl-2 font-bold">
                  {user?.userId}
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
            <div className="font-bold">Asignaturas</div>
            <div className="font-bold">Teléfono Tutor</div>

            <div>{Tabla2.curso}</div>
            <div>{5}</div>
            <div>{user?.phoneNumber}</div>
          </div>
        </div>
      </div>

      <section className="mx-auto">
        {/* Tabla de historial académico */}
        <AcademicHistoryContainer courses={courses} />

        {/* Promedio del periodo */}
        <section className="mx-auto w-max rounded-lg border-brand-primary border py-2 px-8">
          <span className="text-brand-primary font-bold text-lg">
            Promedio del Periodo {49.3}
          </span>
        </section>

        {
          courses && <TeacherCommentsSection teachers={courses[0].teachers} />
        }
      </section>
    </div>
  );
}

export default EstudianteView
