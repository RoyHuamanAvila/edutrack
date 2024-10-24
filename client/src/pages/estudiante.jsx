import { useEffect, useState } from "react";
import axios from 'axios'
import CommentCard from "../components/CommentCard";
import { getToken } from "../token";
import useDropdown from "../hooks/useDropdown";

function Estudiante() {
  const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;
  const token = getToken();

  const comments = [
    {
      name: "Juan Pérez",
      asignatura: "Matemáticas",
      comment: "Has mejorado mucho en la comprensión de la gramática y redacción en español. Sigue esforzándote en ampliar tu vocabulario para expresarte con más precisión.",
      date: "16/10/2024",
      img: "https://s3-alpha-sig.figma.com/img/0137/6a01/f8898b4d066033af55f17b0f52d39b46?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pT7Ii9ckiq7iMG4-oihX8erT8he0ShxC8bUVoENQl3~Izq2PgHCkCPtlBx7sHLPy2G6W-zz0xZHa6eXQuQlbdYsr93r9P0dcrAP2EdYQYsLzwV1FwwKaZuleWXlwGJ-2v~8RZfLpCAxka8~LsveNj9t3ERVQv0uufcPFehuE96~FEFkdeKWAooiTdSyB6hB1EYmVjM7L8I9GzDNNBUrbAbcuOf~03G~NkxlAaoru8XdfzKkIuVb81oJtrA5635j~aG8phFK7-UxDkHx4PQuE1CD1k7M~6eZYihN6Kplu3rgFOzw-TEboz4TWQrxOTeQHmYmq3sV6GnnxUoKGSLfewQ__"
    },
    {
      name: "María López",
      asignatura: "Historia",
      comment:
        "Has mejorado mucho en la comprensión de la gramática y redacción en español. Sigue esforzándote en ampliar tu vocabulario para expresarte con más precisión.",
      date: "16/10/2024",
      img: 'https://s3-alpha-sig.figma.com/img/25d1/a770/20008b9e3f08babd1f67f01cdb8f89d6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmDWdjvi5DAlFMcJlHwN69y~dAwos~k3PcZdg-Th3qoj2aasEfMTKgoBNE96o0PtNeTjEyD908bg0FUq2QuG32~WaHFfB8mymfgl4CHuuKztts7KJ8RljIdzWX0qMnRiN6HPXs1pXiOjPZv5ZvXEPfbxrGNjYhe0xjz8VkD1wU3AhtFwevnV-EDow6SFRrl681kvazFitFdeF3ZSkxE5GviHHeuGiBiEnlUZJtImv-t8-X9il9Au0awYAjV5In~oQF7ZI6t5UM7e4MT5FZfEfiDd~yEvXlx-JTU3qYrqFNeM189gBc7SLNuwxACFH9~fCKasZIGrgJ6fmq7iah2uzw__'
    },
    {
      name: "Carlos García",
      asignatura: "Ciencias",
      comment: "Has mejorado mucho en la comprensión de la gramática y redacción en español. Sigue esforzándote en ampliar tu vocabulario para expresarte con más precisión.",
      date: "16/10/2024",
      img: 'https://s3-alpha-sig.figma.com/img/2cc3/ba92/c0a402567bf37e095262f204b3eb3c99?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=glLoEH76iElOPQwm5Yd608lK~2LEAmdwaPb2kUz5EEAVlWDqvxTZRBssOcYcL32MedneUlDhxxMBE9dVMT5akoLO1IDLHbdn1UfvOvrK~uOGklPyVfglB-X9sGqtmLW~jm6ef~TvIGUjXvrns~D9i560oWSN9RFA~yNEj0P-Diqkfon47pH9z9xpZObgVglwf3P78wwQxIzIeMWI0ONo4WxYP5LIHOgtC75BQY90gcTNhaF6zkPPG-yzuyyd16A7~Z0pEeBLMeBSg3zyL3OJ7iQA5Ew9okqK6q9giLXTJ5oBVtWXU0E53dUuWVBT7WPE9uQswiemPVYQtkSNf5E5xg__'
    },
    {
      name: "Ana Martínez",
      asignatura: "Lengua y Literatura",
      comment:
        "Has mejorado mucho en la comprensión de la gramática y redacción en español. Sigue esforzándote en ampliar tu vocabulario para expresarte con más precisión.",
      date: "16/10/2024",
      img: 'https://s3-alpha-sig.figma.com/img/85ff/b33a/47350a8e1c89e2ce276e4cb0255e10f3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P3xIC6zUkYfw8xiYVD4SinYD7EtWuUcXcz27~xwxtiYZMTCtVjX7NxHjU6XXf5l7MmUkeq3kCUZ4XPlu3KW-DxLz0x1eVZ47OVMULR1H-pN4Spfl9hj3RsJ3dLcC-YSJ3l~2NzpbKhoj~t1CxC34r17gxuU8ySJfreVxh3Xprto6x1LM6Nfn98TUAHLucXri-bZw9SsKrtQGEF4fKqQ1ypXI7wn7-qV1PeoHs-wXg5oHZQK2je3HTwGJlSyJEtgk7hVl9sqbStTQ9kUQ0ysi3ZSjwCYIS3faIUycegIgyvRgjZeVgB6qyZROuNTkL9DXCRBoZ5l7ZesiSiRE5MlJiA__'
    },
  ];

  const listPeriod = ['2024-3', '2024-2', '2024-1']

  const { DropdownComponent: DropdownComentarios } = useDropdown('Comentarios', 'Comentarios', listPeriod);
  const { DropdownComponent: DropdownHistorial } = useDropdown('Dropdown_Historial', 'Dropdown_Historial', listPeriod);

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
          <DropdownHistorial>
            Periodo
          </DropdownHistorial>
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
          <div className="w-full flex justify-center">
            <DropdownComentarios>
              Periodo
            </DropdownComentarios>
          </div>

          {/* Lista de comentarios */}
          <div className="grid grid-cols-2 gap-8 px-[104px]">
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
