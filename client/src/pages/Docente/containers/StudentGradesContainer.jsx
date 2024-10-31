import { useState } from "react";
import { toast } from "sonner";
import StudentGradesTable from "../components/StudentGradesTable";
import ModalComentario from "../../../components/Modal";

let initialState = [
  {
    nombreCompleto: "Ana García",
    idEstudiante: "E001",
    calificacion: 95,
    courses: "Educación Física",
    grado: "7A Bachillerato",
    comentario: "",
  },
  {
    nombreCompleto: "Luis Fernández",
    idEstudiante: "E002",
    calificacion: 88,
    courses: "Educación Física",
    grado: "7A Bachillerato",
    comentario: "",
  },
  {
    nombreCompleto: "María López",
    idEstudiante: "E003",
    calificacion: 92,
    courses: "Educación Física",
    grado: "7A Bachillerato",
    comentario: "",
  },
  {
    nombreCompleto: "Carlos Martínez",
    idEstudiante: "E004",
    calificacion: 85,
    courses: "Educación Física",
    grado: "7A Bachillerato",
    comentario: "",
  },
  {
    nombreCompleto: "Sofía Rodríguez",
    idEstudiante: "E005",
    calificacion: 90,
    courses: "Educación Física",
    grado: "7A Bachillerato",
    comentario: "",
  },
];

const StudentGradesContainer = () => {
  const [students, setStudents] = useState(initialState);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const activateRegister = () => {
    setIsRegistering(true);
  };

  const cancelRegister = () => {
    setIsRegistering(false);
    setStudents(initialState);
  };

  const handleGradeChange = (id, newGrade) => {
    setStudents(
      students.map((student) =>
        student.idEstudiante === id
          ? { ...student, calificacion: newGrade }
          : student
      )
    );
  };

  const handleSaveGrades = () => {
    setIsRegistering(false);
    initialState = students;
    toast.success("Guardado Exitosamente");
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCommentSubmit = (comentario) => {
    setStudents(
      students.map((student) =>
        student.idEstudiante === selectedStudent.idEstudiante
          ? { ...student, comentario }
          : student
      )
    );
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div>
      <StudentGradesTable
        students={students}
        isRegistering={isRegistering}
        activateRegister={activateRegister}
        cancelRegister={cancelRegister}
        handleGradeChange={handleGradeChange}
        handleSaveGrades={handleSaveGrades}
        openModal={openModal}
      />
      <ModalComentario
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCommentSubmit}
        student={selectedStudent}
      />
    </div>
  );
};

export default StudentGradesContainer;
