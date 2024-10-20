import CommentCard from "../components/CommentCard";

function Estudiante() {
  const calificaciones = [
    {
      asignatura: "Matemáticas",
      calificacion: 85,
      promedio: 88,
      docente: "Prof. García",
    },
    {
      asignatura: "Historia",
      calificacion: 90,
      promedio: 92,
      docente: "Prof. López",
    },
    {
      asignatura: "Ciencias",
      calificacion: 78,
      promedio: 80,
      docente: "Prof. Martínez",
    },
    {
      asignatura: "Literatura",
      calificacion: 92,
      promedio: 89,
      docente: "Prof. Fernández",
    },
  ];

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
      <div id="student" className="mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] font-extrabold">Historial Académico</h2>
          <div className="space-x-[23px]">
            <span className="text-[#595353] font-extrabold">
              Periodo Seleccionado
            </span>
            <select name="periodo" id="periodo">
              <option value="2024-3">2024-3</option>
            </select>
          </div>
        </div>
        <table className="w-full mt-[17px] text-center">
          <thead>
            <tr>
              <th>Asignatura</th>
              <th>Calificación</th>
              <th>Promedio por asignatura</th>
              <th>Docente</th>
            </tr>
          </thead>
          <tbody>
            {calificaciones.map(
              ({ asignatura, calificacion, docente, promedio }, index) => (
                <tr key={index}>
                  <td className="py-[25px] px-[10px]">{asignatura}</td>
                  <td className="py-[25px] px-[10px]">{calificacion}</td>
                  <td className="py-[25px] px-[10px]">{promedio}</td>
                  <td className="py-[25px] px-[10px]">{docente}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="mx-auto w-max mt-[17px] mb-[85px]">
          <span className="text-[#595353] font-extrabold">
            Promedio del Periodo
          </span>{" "}
          7.8
        </div>
        <div className="space-y-[18px]">
          <h2 className="font-extrabold text-[32px] text-center">
            Comentarios de los docentes
          </h2>
          <p className="text-sm text-center max-w-[690px] m-auto">
            En esta sección encontrará los comentarios y la retroalimentación
            proporcionada por los docentes. Aquí podrá revisar observaciones
            detalladas sobre el desempeño, áreas de mejora y recomendaciones.
          </p>
        </div>
        <div className="mx-auto w-max my-[50px]">
          Período Seleccionado
          <select name="periodo" id="periodo">
            <option value="2024-3">2024-3</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-[49px]">
          {comments.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Estudiante;
