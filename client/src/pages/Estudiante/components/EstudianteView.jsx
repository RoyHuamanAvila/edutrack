import React, { useState } from "react";
import AcademicHistoryContainer from "../containers/AcademicHistoryContainer";
import TeacherCommentsSection from "./TeacherCommentsSection";
// import EditModal from "../../../components/UserProfileModal ";

const EstudianteView = ({ user, courses }) => {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleEditClick = () => {
  //   setModalOpen(true);
  // };

  // const handleSave = (updatedUser) => {
  //   // Aquí puedes manejar la lógica para guardar los datos actualizados (por ejemplo, enviarlos a un API)
  //   console.log("Datos actualizados:", updatedUser);
  // };

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
    <div className="max-w-[1281px] mx-auto p-6">
      <div className="  grid grid-cols-2 gap-8">
        {/* Contenedor Izquierdo (Card 1) */}
        <div className="w-[592px] h-[174px]  bg-white rounded-lg  flex items-center border border-brand-primary">
          <div className="relative w-[200px] h-[172px] overflow-hidden rounded-l ">
            <img
              src={user?.profileImageUrl}
              alt="Imagen"
              className="w-full h-full object-cover"
            />
          </div>

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
          {/* <button
            onClick={handleEditClick}
            className="mt-2 bg-brand-primary  text-white rounded px-4 py-2"
          >
            Editar
          </button> */}
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

      <section className="mx-auto">
        {/* Tabla de historial académico */}
        <AcademicHistoryContainer courses={courses} />

        {/* Promedio del periodo */}
        <section className="mx-auto w-max rounded-lg border-brand-primary border py-2 px-8">
          <span className="text-brand-primary font-bold text-lg">
            Promedio del Periodo {49.3}
          </span>
        </section>

        {courses && <TeacherCommentsSection teachers={courses[0].teachers} />}
      </section>
      {/* Modal de edición */}
      {/* <EditModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        user={user}
        onSave={handleSave}
      /> */}
    </div>
  );
};

export default EstudianteView;
