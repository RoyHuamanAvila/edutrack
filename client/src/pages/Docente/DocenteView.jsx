const DocenteView = ({ imgProfile, teacherName, teacherId, DropdownPeriod, DropdownSubject, DropdownCourse }) => {
  return (
    <div id="docente" className="max-w-[1216px] m-auto">
      {/* Datos del Docente */}
      <div className="grid grid-cols-2 gap-8 my-[72px]">
        {/* Card izquierda */}
        <div className="card border border-brand-primary w-full flex">
          { /* Foto de perfil del docente */}
          <img className="max-h-[174px] max-w-[200px]" src={imgProfile} alt="Perfil Docente" />

          {/* Datos personales */}
          <div className="p-10">
            <p className="font-bold text-grey-1 text-h5 leading-4">Docente</p>
            <p className="font-bold text-h4 text-brand-primary">{teacherName}</p>
            <p className="font-bold text-grey-1">ID <span className="text-brand-primary">{teacherId}</span></p>
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
        <form className="bg-brand-secondary flex py-4 px-8 gap-4 rounded-lg">
          <DropdownPeriod className="bg-white-2 !text-black-2">Periodo</DropdownPeriod>
          <DropdownSubject className="bg-white-2 !text-black-2">Asignatura</DropdownSubject>
          <DropdownCourse className="bg-white-2 !text-black-2">Curso</DropdownCourse>
          <button type="submit" className="bg-brand-primary text-white-2 py-2 px-8 rounded-lg ml-auto font-bold">Buscar</button>
        </form>
        <h3 className="text-h5 text-grey-1">2024-3 / Educación Física / 7A Bachillerato</h3>
      </div>


      {/* Header Lista de Estudiantes */}
      <div className="flex justify-between mb-[10px]">
        <h3 className="text-h4">Lista de Estudiantes</h3>
        <button className="bg-brand-primary text-white-2 px-8 py-2 rounded-lg text-[18px] font-bold flex gap-4 items-center">
          Registrar Calificaciones <img src="/pencil.svg" alt="Pencil Icon" />
        </button>
      </div>

      <table className="w-full table-fixed">
        <thead>
          <tr>
            <td className="text-black-1 font-bold bg-brand-secondary py-6 rounded-s-lg text-center">Estudiante</td>
            <td className="text-black-1 font-bold bg-brand-secondary py-6 pl-20">ID</td>
            <td className="text-black-1 font-bold bg-brand-secondary py-6">Calificacion</td>
            <td className="text-black-1 font-bold bg-brand-secondary py-6 rounded-e-lg text-left">Comentario</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}
export default DocenteView
