import React from "react";

const Login = () => {
    return (
        <div className="bg-gray-400">
        <div className="mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            
            {/* Contenedor de dos columnas: izquierda y derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 space-y-12 lg:space-y-0">
              
              {/* Contenedor Izquierdo */}
              <div className="group relative bg-slate-600 p-6">
                <h2 className="text-sm font-bold text-gray-900 p-11">"Monitoreo de rendimientos"</h2>
                <h3 className="mt-6 text-sm text-gray-500 p-11">
                  <span className="absolute inset-0"></span>
                  Actualizados y siempre accesibles
                </h3>
              </div>
              
              {/* Contenedor Derecho */}
              <div className="group relative bg-slate-500 p-6">
                <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="" alt="Logo" className="object-cover w-full h-full" />
                </div>
                <p className="mt-6 text-base font-semibold text-gray-900">
                  Bienvenidos al Portal Académico
                </p>
              </div>
      
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Login;
