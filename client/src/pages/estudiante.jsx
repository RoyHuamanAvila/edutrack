import { useEffect, useState } from "react";
import axios from 'axios'
import CommentCard from "../components/CommentCard";
import { getToken } from "../token";

function Estudiante() {
  const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;
  const token = getToken();

  const comments = [
    {
      name: "Juan Pérez",
      asignatura: "Matemáticas",
      comment: "Excelente en explicar conceptos complejos de manera sencilla.",
      date: "16/10/2024",
    },
    {
      name: "María López",
      asignatura: "Historia",
      comment:
        "Sus clases son muy dinámicas y llenas de ejemplos interesantes.",
      date: "16/10/2024",
    },
    {
      name: "Carlos García",
      asignatura: "Ciencias",
      comment: "Muy paciente y siempre dispuesto a ayudar a los estudiantes.",
      date: "16/10/2024",
    },
    {
      name: "Ana Martínez",
      asignatura: "Lengua y Literatura",
      comment:
        "Fomenta la creatividad y el pensamiento crítico en sus alumnos.",
      date: "16/10/2024",
    },
    {
      name: "Luis Fernández",
      asignatura: "Educación Física",
      comment: "Motiva a los estudiantes a mantenerse activos y saludables.",
      date: "16/10/2024",
    },
  ];

  const [student, setStudent] = useState();

  const fetchUser = async () => {
    try {
      console.log('Token: ', token)
      const response = await axios.get(`${DB_DOMAIN}/student/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setStudent(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div className="max-w-[1281px] mx-auto">
      <div className="py-10 sm:py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Contenedor Izquierdo (Card 1) */}
          <div className="w-[613px] h-[280px] bg-white rounded-lg shadow-lg p-6 flex items-center">
            {/* Imagen a la izquierda */}
            <img
              src="\src\icons\patito.png" // Asegúrate de que esta ruta sea correcta
              alt="img"
              className="w-[183px] h-[183px] object-cover rounded-full mr-4" // Ajusta el tamaño según tus necesidades
            />

            {/* Contenedor para el texto a la derecha */}
            <div className="flex-1 text-left">
              <h2 className="text-[12px] font-bold text-black p-2">
                Estudiante
              </h2>
              <h3 className="text-[20px] text-gray-400 p-4">Alberto</h3>
              <h4 className="text-[20px] text-gray-400 p-4">ID</h4>
            </div>
          </div>

          {/* Contenedor Derecho (Card 2) */}
          <div className="w-[576px] h-[280px] bg-[#CDCDCD] rounded-lg p-6">
            <div className="flex flex-col justify-center items-center h-full">
              {/* Dividir el contenido en dos columnas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-start p-2">
                  <p className="text-gray-700">Institucion:</p>
                  <p className="text-gray-500">Curso</p>
                  <p className="text-gray-500">Promedio del curso</p>
                </div>
                <div className="flex flex-col items-start p-2">
                  <p className="text-gray-700">Titular:</p>
                  <p className="text-gray-500">Telefono del titular</p>
                  <p className="text-gray-500">Asignatura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto">
        {/* Encabezado historial académico */}
        <div className="flex items-center justify-between mb-[10px]">
          <h2 className="text-h3 font-extrabold">Historial Académico</h2>
          <div className="space-x-[23px]">
            <span className="text-[#595353] font-extrabold">Periodo Seleccionado</span>
            <select name="periodo" id="periodo">
              <option value="2024-3">2024-3</option>
            </select>
          </div>
        </div>

        {/* Tabla de notas */}
        <table className="w-full text-center mb-[76px]">
          <thead className="text-white-2 font-bold">
            <tr className="rounded-lg overflow-hidden">
              <th className="bg-brand-primary py-6 rounded-s-lg">Asignatura</th>
              <th className="bg-brand-primary py-6">Calificación</th>
              <th className="bg-brand-primary py-6">Promedio por asignatura</th>
              <th className="bg-brand-primary py-6 rounded-e-lg">Docente</th>
            </tr>
          </thead>
          <tbody>
            {
              /*  student.courses.map(({ asignatura, calificacion, docente, promedio }, index) =>
                 <tr className="even:bg-white-1 odd:bg-white-2 text-sm" key={index}>
                   <td className="py-[25px] px-[10px]">{asignatura}</td>
                   <td className="py-[25px] px-[10px]">{calificacion}</td>
                   <td className="py-[25px] px-[10px]">{promedio}</td>
                   <td className="py-[25px] px-[10px]">{docente}</td>
                 </tr>
               ) */
            }
          </tbody>
        </table>

        {/* Promedio del periodo */}
        <section className="mx-auto w-max rounded-lg border-brand-primary border py-6 px-8 mb-20">
          <span className="text-brand-primary font-bold text-lg">Promedio del Periodo</span> 9.3
        </section>

        {/* Encabezado de los comentarios */}
        <section className="space-y-4 pt-20 pb-10">
          <h2 className="text-h3 font-bold text-center">
            Comentarios de los docentes
          </h2>
          <p className="text-sm text-center max-w-[592px] m-auto">
            En esta sección encontrará los comentarios y la retroalimentación proporcionada por los docentes.
            Aquí podrá revisar observaciones detalladas sobre el desempeño, áreas de mejora y recomendaciones.
          </p>
        </section>

        {/* Sección de comentarios */}
        <section className="py-8">

          {/* Dropdown periodo escolar */}
          <form className="mx-auto w-max my-[50px] mb-14 bg-brand-primary text-white-2 text-lg font-bold rounded-lg">
            <select className="bg-transparent py-6 px-8 w-full outline-none" name="periodoComentarios" id="periodoComentarios">
              <option className="w-full" value="2024-3">
                2024-3
              </option>
              <option className="w-full" value="2024-2">
                2024-2
              </option>
              <option className="w-full" value="2024-1">
                2024-1
              </option>
            </select>
          </form>

          {/* Lista de comentarios */}
          <div className="grid grid-cols-2 gap-[49px]">
            {
              comments.map((comment, index) => <CommentCard key={index} {...comment} />)
            }
          </div>
        </section>
      </section>
    </div>
  );
}

export default Estudiante;
