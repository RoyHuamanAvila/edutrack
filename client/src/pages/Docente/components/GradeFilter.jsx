import useDropdown from "../../../hooks/useDropdown"

const GradeFilter = () => {
  const { DropdownComponent: DropdownPeriod } = useDropdown('period', 'period', ['2024-3'])
  const { DropdownComponent: DropdownSubject } = useDropdown('subject', 'subject', ['Educación Física'])
  const { DropdownComponent: DropdownCourse } = useDropdown('course', 'course', ['7A Bachillerato'])

  return (
    <form className="bg-brand-secondary flex py-4 px-8 gap-4 rounded-lg">
      <DropdownPeriod className="bg-white-2 !text-black-2">Periodo</DropdownPeriod>
      <DropdownSubject className="bg-white-2 !text-black-2">Asignatura</DropdownSubject>
      <DropdownCourse className="bg-white-2 !text-black-2">Curso</DropdownCourse>
      <button type="submit" className="bg-brand-primary text-white-2 py-2 px-8 rounded-lg ml-auto font-bold">Buscar</button>
    </form>
  )
}
export default GradeFilter
