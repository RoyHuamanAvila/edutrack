import AcademicHistoryTable from "../components/AcademicHistoryTable"
import useDropdown from '../../../hooks/useDropdown';

const listPeriod = ["2024-3", "2024-2", "2024-1"];

const AcademicHistoryContainer = ({ courses }) => {
  const { DropdownComponent: DropdownHistorial } = useDropdown(
    "Dropdown_Historial",
    "Dropdown_Historial",
    listPeriod
  );

  return <AcademicHistoryTable DropdownHistorial={DropdownHistorial} courses={courses} />
}
export default AcademicHistoryContainer
