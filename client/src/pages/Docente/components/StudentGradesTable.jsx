const StudentGradesTable = ({
  students,
  isRegistering,
  activateRegister,
  cancelRegister,
  handleGradeChange,
  handleSaveGrades,
  openModal, // Agregar esta línea
}) => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-[10px]">
        <h3 className="text-h4">Lista de Estudiantes</h3>
        {isRegistering ? (
          <div className="flex gap-2">
            <button
              className="bg-brand-primary text-white-2 py-2 px-8 rounded-lg font-bold"
              onClick={handleSaveGrades}
            >
              Guardar Cambios
            </button>
            <button
              className="bg-brand-secondary text-brand-primary py-2 px-8 rounded-lg font-bold"
              onClick={cancelRegister}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            className="bg-brand-primary text-white-2 px-8 py-2 rounded-lg text-[18px] font-bold flex gap-4 items-center"
            onClick={activateRegister}
          >
            Registrar Calificaciones <img src="/pencil.svg" alt="Pencil Icon" />
          </button>
        )}
      </div>

      {/* Tabla */}
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <td className="text-black-1 font-bold bg-brand-secondary py-6 rounded-s-lg text-center">
              Estudiante
            </td>
            <td className="text-black-1 font-bold bg-brand-secondary py-6 pl-20">
              ID
            </td>
            <td className="text-black-1 font-bold bg-brand-secondary py-6">
              Calificación
            </td>
            <td className="text-black-1 font-bold bg-brand-secondary py-6 rounded-e-lg text-left">
              Comentario
            </td>
          </tr>
        </thead>
        <tbody>
          {students.map(
            ({ idEstudiante, nombreCompleto, calificacion, comentario }) => (
              <tr className="odd:bg-white-2 even:bg-white-1" key={idEstudiante}>
                <td className="pt-6 pb-2 text-center">{nombreCompleto}</td>
                <td className="pt-6 pb-2 pl-20">{idEstudiante}</td>
                <td className="pt-6 pb-2">
                  {isRegistering ? (
                    <input
                      className="border border-brand-primary text-center w-[66px] py-2 px-4 rounded-lg"
                      type="text"
                      placeholder="Nota"
                      value={calificacion}
                      onChange={(e) =>
                        handleGradeChange(idEstudiante, e.target.value)
                      }
                    />
                  ) : (
                    calificacion
                  )}
                </td>
                <td className="pt-6 pb-2">
                  <button
                    className="py-2 px-6 rounded-lg hover:bg-brand-secondary"
                    onClick={() =>
                      openModal({ idEstudiante, nombreCompleto, comentario })
                    } // Abre el modal y pasa el estudiante
                  >
                    <img src="/comment.svg" alt="Comentario" />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGradesTable;
