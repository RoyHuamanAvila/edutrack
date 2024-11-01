const AcademicHistoryTable = ({ DropdownHistorial, courses }) => {
  return (
    <div>
      {/* Encabezado historial académico */}
      <div className="flex items-center justify-between mb-[10px]">
        <h2 className="text-h3 font-bold">Historial Académico</h2>
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
          {
            courses?.map((course, index) =>
              course?.teachers?.map(teacher => {
                return (
                  <tr className="even:bg-white-1 odd:bg-white-2" key={index}>
                    <td className="py-[25px] px-[10px] pl-[200px]">{teacher.subjectName}</td>
                    <td className="py-[25px] px-[10px]">{teacher.gradeValue}</td>
                    <td className="py-[25px] px-[10px] pr-[200px]">{teacher.teacherName}</td>
                  </tr>
                )
              })
            )}
        </tbody>
      </table>
    </div>
  )
}
export default AcademicHistoryTable
