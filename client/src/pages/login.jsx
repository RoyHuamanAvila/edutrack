import { EyeIcon } from "../assets/icon/icon";
import { EyeIcon2 } from "../assets/icon/icon2";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../token";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada
    setLoading(true); // Activar estado de carga
    setError(""); // Limpiar mensajes de error

    // Validación básica del email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      setLoading(false);
      return;
    }

    try {
      // Hacer la solicitud a la API con el email y la contraseña
      const response = await axios.post(`${DB_DOMAIN}/Users/login`, {
        email: email,
        password,
      });

      console.log("Respuesta de la API:", response.data); // Manejar la respuesta de la API
      const { token } = response.data; // Asegúrate de que esto sea correcto

      setToken(token); // Guardar el token utilizando la función setToken
      navigate("/estudiante"); // Redirigir al usuario a la vista de estudiante
    } catch (error) {
      const errorMessage =
        error.response?.data?.Email ||
        "Error en la autenticación. Verifique sus credenciales.";
      setError(errorMessage); // Manejar el error
      console.error(
        "Error en la autenticación:",
        error.response?.data.errors || error.response?.data
      );
    } finally {
      setLoading(false); // Desactivar estado de carga
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="w-[1216px] h-full text-center grid grid-cols-2">
        {/* Contenedor principal */}
        <div className="relative p-0 w-[592px]">
          <img
            src="../public/imagenes/Portada.png"
            alt="Portada del monitoreo de rendimientos"
            className="h-full w-full object-cover "
          />
          <div className=" bg-[#ffffff] border border-brand-primary absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[384px] h-[90px] flex items-center justify-center bg-white rounded-lg p-4 shadow-lg text-center">
            <div>
              <h2 className="text-[24px] font-bold text-brand-primary">
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
            <div className="w-full  rounded-lg ">
              <img
                src="\Logo.jpg"
                alt="Logo del Portal Académico"
                className="w-[192px] h-[48px] "
              />
              <h3 className="text-[48px] text-black font-bold  ">
                Bienvenidos al Portal Académico
              </h3>
            </div>

            {/* Formulario de inicio de sesión */}
            <form
              onSubmit={handleLogin}
              className="w-full max-w-[384px] space-y-6 mt-4"
            >
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-[16px] font-medium leading-6 text-gray-900"
                >
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  value={email} // Valor del input vinculado al estado email
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
                  placeholder="Ingresar Correo Electrónico"
                  required
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
                </div>
                <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
                  <input
                    type={showPassword ? "text" : "password"} // Cambia entre texto visible y contraseña oculta
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none pr-10"
                    placeholder="Ingresar contraseña"
                    required
                  />
                  <span
                    className="flex items-center justify-center pr-3 cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword); // Alternar visibilidad
                      if (!showPassword) {
                        console.log("Mostrar contraseña");
                      } else {
                        console.log("Ocultar contraseña");
                      }
                    }}
                  >
                    {showPassword ? (
                      <EyeIcon2 className="w-5 h-5 text-gray-500 bg-white bg-slate-500" /> // Ícono para ocultar la contraseña
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-500 bg-white" /> // Ícono para mostrar la contraseña
                    )}
                  </span>
                </div>
              </div>
              <p className="text text-black cursor-pointer mt-4">
                ¿Has olvidado tu contraseña?
              </p>
              <button
                type="submit"
                className="w-[204px] bg-brand-primary text-white-1 font-semibold py-2 px-4 rounded-md  transition duration-200"
                disabled={loading} // Desactivar el botón mientras se carga
              >
                {loading ? "Cargando..." : "Iniciar Sesión"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
