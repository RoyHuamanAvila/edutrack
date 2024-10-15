function Estudiante() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1281px] py-10 sm:py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Contenedor Izquierdo (Card 1) */}
          <div className="w-[680px] h-[280px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-end text-center">
            <h2 className="text-[12px] font-bold text-black p-2">Estudiante</h2>
            <h3 className="text-[20px] text-gray-400 p-4">Alberto</h3>
            <h4 className="text-[20px] text-gray-400 p-4">ID</h4>
          </div>

          {/* Contenedor Derecho (Card 2) */}
          <div className="w-[680px] h-[280px] bg-[#CDCDCD] rounded-lg p-6">
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
    </div>
  );
}

export default Estudiante;
