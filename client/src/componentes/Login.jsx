import React from "react";
import EyeIcon from "../assets/icon/icon";

const Login = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="mx-auto px-4 sm:px-6 w-full max-w-7xl py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 space-y-12 lg:space-y-0">

          {/* Contenedor Izquierdo */}
          <div className="group relative rounded p-6 hidden lg:block h-full w-[767px]">
            <div className="flex flex-col justify-end h-full text-center">
              <h2 className="text-[24px] font-bold text-black p-2">
                Monitoreo de rendimientos
              </h2>
              <h3 className="text-[20px] text-gray-400 p-4">
                Actualizados y siempre accesibles
              </h3>
            </div>
          </div>

          {/* Contenedor Derecho */}
          <div className="group relative bg-[#CDCDCD] p-6 w-[673px] h-full flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center justify-center text-center">
              <img src="" alt="Logo" className="object-cover w-[134px] h-[76px] bg-white rounded-md" />
              <h3 className="mt-6 text-[48px] text-black p-5 font-bold">
                Bienvenidos al Portal Académico
              </h3>
            </div>

            <div className="space-y-6 flex flex-col items-center w-full">
              <div className="w-[499px]">
                <label htmlFor="email" className="block text-[16px] font-medium leading-6 text-gray-900">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
                  placeholder="Ingresar correo electrónico"
                />
              </div>

              <div className="w-[499px] relative">
                <div className="flex items-center justify-between text-[16px] text-black">
                  <label htmlFor="password" className="block text-[16px] font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <p className="text-right text-black">
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
                  <span className="flex items-center justify-center pr-3 cursor-pointer"> {/* Coloca el ícono en un span */}
                    <EyeIcon className="w-5 h-5 text-gray-500 bg-white" /> {/* Aquí puedes agregar el color de fondo */}
                  </span>
                </div>

              </div>

              <button className="w-[499px] bg-[#6B6969] text-white font-semibold py-2 px-4 rounded-md">
                Iniciar Sesión
              </button>
            </div>

            <div className="flex items-center space-x-2 text-[16px] text-black">
              <p>Asistencia al usuario - </p>
              <p className="font-bold text-black">Contáctenos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
