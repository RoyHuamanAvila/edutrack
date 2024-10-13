function Estudiante() {
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
                <tr>
                    <th>Asignatura</th>
                    <th>Calificación</th>
                    <th>Promedio por asignatura</th>
                    <th>Docente</th>
                </tr>
                <tr>
                    <td className="py-[25px] px-[10px]">Nombre de la asignatura</td>
                    <td className="py-[25px] px-[10px]">#</td>
                    <td className="py-[25px] px-[10px]">#.#</td>
                    <td className="py-[25px] px-[10px]">Nombre del docente</td>
                </tr>
            </table>
            <div className="mx-auto w-max mt-[17px]">
                <span className="text-[#595353] font-extrabold">Promedio del Periodo</span> 7.8
            </div>
        </div>
    )
}

export default Estudiante;
