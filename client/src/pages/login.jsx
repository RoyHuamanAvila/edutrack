import EyeIcon from "../assets/icon/icon";

const Login = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-[1216px] h-full  text-center grid grid-cols-2">
        {" "}
        {/* Contenedor principal */}
        <div className="relative p-0 w-[592px]">
          {/* Contenedor izquierdo */}
          <img
            src="../public/imagenes/Portada.png" // Asegúrate de que esta ruta sea correcta
            alt="Portada del monitoreo de rendimientos"
            className="h-full w-full object-cover" // Mantiene h-full para que ocupe el 100% del alto del contenedor
          />
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[384px] h-[90px] flex items-center justify-center bg-white rounded-lg p-4 shadow-lg text-center">
            {/* Texto en la parte inferior */}
            <div>
              <h2 className="text-[24px] font-bold text-[#722B76]">
                Monitoreo de rendimientos
              </h2>
              <h3 className="text-[20px] text-[#4A4A4A]">
                Actualizados y siempre accesibles
              </h3>
            </div>
          </div>
        </div>
        <div className="p-4 w-[592px]">
          <div className="p-16 w-full flex flex-col items-start text-left mb-8">
            {/* Contenedor de logo y título */}
            <div className="w-full bg-[#6B6969] p-4 rounded-lg">
              <img
                src="\Logo.jpg" // Asegúrate de que esta ruta sea correcta
                alt="Logo del Portal Académico"
                className="w-[192px] h-[48px] mb-2" // Añadido margen inferior para separar el logo del texto
              />
              <h3 className="text-[48px] text-black font-bold mb-4">
                Bienvenidos al Portal Académico
              </h3>
            </div>

            {/* Formulario de inicio de sesión */}
            <div className="w-full max-w-[384px] space-y-6 mt-4  ">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-[16px] font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
                  placeholder="Ingresar correo electrónico"
                />
              </div>

              <div className="relative w-full">
                <div className="flex items-center justify-between text-[16px] text-black">
                  <label
                    htmlFor="password"
                    className="block text-[16px] font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                  <p className="text-right text-black cursor-pointer">
                    ¿Has olvidado tu contraseña?
                  </p>
                </div>
                <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none pr-10"
                    placeholder="Ingresar contraseña"
                  />
                  <span className="flex items-center justify-center pr-3 cursor-pointer">
                    <EyeIcon className="w-5 h-5 text-gray-500 bg-white" />
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#6B6969] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c5c5c] transition duration-200">
                Iniciar Sesión
              </button>
            </div>

            {/* Información de contacto */}
            <div className="flex items-center space-x-2 text-[16px] text-black mt-4">
              <p>Asistencia al usuario - </p>
              <p className="font-bold text-black cursor-pointer">Contáctenos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
