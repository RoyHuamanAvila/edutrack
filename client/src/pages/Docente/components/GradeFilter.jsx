import useDropdown from "../../../hooks/useDropdown"

const GradeFilter = ({ subjects }) => {
  const { DropdownComponent: DropdownPeriod, selectedOption: period } = useDropdown({ id: 'period', name: 'period', options: ['2024-3'] })
  const { DropdownComponent: DropdownSubject, selectedOption: subject } = useDropdown({ id: 'subject', name: 'subject', options: subjects })
  const { DropdownComponent: DropdownCourse, selectedOption: course } = useDropdown({ id: 'course', name: 'course', options: ['7A Bachillerato'] })

  return (
    <>
      <form className="bg-brand-secondary flex py-4 px-8 gap-4 rounded-lg">
        <DropdownPeriod className='dropdown-outline'>
          Periodo
        </DropdownPeriod>
        <DropdownSubject className='dropdown-outline'>
          Asignatura
        </DropdownSubject>
        <DropdownCourse className='dropdown-outline'>
          Curso
        </DropdownCourse>
        <button type="submit" className="bg-brand-primary text-white-2 py-2 px-8 rounded-lg ml-auto font-bold">Buscar</button>
      </form>
      <h3 className="text-h5 text-grey-1">{period} / {subject} / {course}</h3>
    </>
  )
}
export default GradeFilter
