import CommentCard from "../components/CommentCard";

function Estudiante() {
    const calificaciones = [
        {
            asignatura: "Matemáticas",
            calificacion: 85,
            promedio: 88,
            docente: "Prof. García"
        },
        {
            asignatura: "Historia",
            calificacion: 90,
            promedio: 92,
            docente: "Prof. López"
        },
        {
            asignatura: "Ciencias",
            calificacion: 78,
            promedio: 80,
            docente: "Prof. Martínez"
        },
        {
            asignatura: "Literatura",
            calificacion: 92,
            promedio: 89,
            docente: "Prof. Fernández"
        }
    ];

    const comments = [
        {
            name: "Juan Pérez",
            asignatura: "Matemáticas",
            comment: "Excelente en explicar conceptos complejos de manera sencilla."
        },
        {
            name: "María López",
            asignatura: "Historia",
            comment: "Sus clases son muy dinámicas y llenas de ejemplos interesantes."
        },
        {
            name: "Carlos García",
            asignatura: "Ciencias",
            comment: "Muy paciente y siempre dispuesto a ayudar a los estudiantes."
        },
        {
            name: "Ana Martínez",
            asignatura: "Lengua y Literatura",
            comment: "Fomenta la creatividad y el pensamiento crítico en sus alumnos."
        },
        {
            name: "Luis Fernández",
            asignatura: "Educación Física",
            comment: "Motiva a los estudiantes a mantenerse activos y saludables."
        }
    ];


    return (
        <div id="student" className="max-w-[1281px] mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-[32px] font-extrabold">Historial Académico</h2>
                <div className="space-x-[23px]">
                    <span className="text-[#595353] font-extrabold">Periodo Seleccionado</span>
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
                    {
                        calificaciones.map(({ asignatura, calificacion, docente, promedio }, index) =>
                            <tr key={index}>
                                <td className="py-[25px] px-[10px]">{asignatura}</td>
                                <td className="py-[25px] px-[10px]">{calificacion}</td>
                                <td className="py-[25px] px-[10px]">{promedio}</td>
                                <td className="py-[25px] px-[10px]">{docente}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="mx-auto w-max mt-[17px] mb-[85px]">
                <span className="text-[#595353] font-extrabold">Promedio del Periodo</span> 7.8
            </div>
            <div className="space-y-[18px]">
                <h2 className="font-extrabold text-[32px] text-center">Comentarios de los docentes</h2>
                <p className="text-sm text-center max-w-[690px] m-auto">En esta sección encontrará los comentarios y la retroalimentación proporcionada por los docentes.
                    Aquí podrá revisar observaciones detalladas sobre el desempeño, áreas de mejora y recomendaciones.</p>
            </div>
            <div className="mx-auto w-max my-[50px]">
                Período Seleccionado
                <select name="periodo" id="periodo">
                    <option value="2024-3">2024-3</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-[49px]">
                {
                    comments.map((comment, index) => <CommentCard key={index} {...comment} />)
                }
            </div>
        </div>
    )
}

export default Estudiante;
