import StudentGradesContainer from "../containers/StudentGradesContainer";
import GradeFilter from "./GradeFilter";

const DocenteView = ({ docente }) => {
  const { imgProfile, teacherName, teacherId } = docente;

  return (
    <div id="docente" className="max-w-[1216px] m-auto">
      {/* Datos del Docente */}
      <div className="grid grid-cols-2 gap-8 my-[72px]">
        {/* Card izquierda */}
        <div className="card border border-brand-primary w-full flex">
          {/* Foto de perfil del docente */}
          <img
            className="max-h-[174px] max-w-[200px]"
            src={imgProfile}
            alt="Perfil Docente"
          />

          {/* Datos personales */}
          <div className="p-10">
            <p className="font-bold text-grey-1 text-h5 leading-4">Docente</p>
            <p className="font-bold text-h4 text-brand-primary">
              {teacherName}
            </p>
            <p className="font-bold text-grey-1">
              ID <span className="text-brand-primary">{teacherId}</span>
            </p>
          </div>
        </div>

        {/* Card derecha */}
        <div className="card border border-brand-primary flex items-center px-6 justify-between">
          <div>
            <p className="text-grey-1 font-bold">Institución</p>
            <p>Colegio Alemán</p>
          </div>
          <div>
            <p className="text-grey-1 font-bold">Periodo Actual</p>
            <p>2024-3</p>
          </div>
          <div>
            <p className="text-grey-1 font-bold">Asignaturas</p>
            <p>2</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="space-y-6 mb-6">
        <h2 className="text-h3">Califique y Retroalimente a sus Estudiantes</h2>
        <GradeFilter />
        <h3 className="text-h5 text-grey-1">
          2024-3 / Educación Física / 7A Bachillerato
        </h3>
      </div>

      {/* Lista de Estudiantes */}
      <StudentGradesContainer />
    </div>
  );
};
export default DocenteView;
