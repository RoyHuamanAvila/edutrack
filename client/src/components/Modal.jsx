// import React, { useState } from "react";
// import { CloseIcon } from "../assets/icon/close";

// const ModalJustificacion = ({ isOpen, onClose, onSubmit }) => {
//   const [comentarios, setComentarios] = useState("");

//   const handleSubmit = () => {
//     onSubmit(comentarios);
//     setComentarios("");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="bg-white p-6 rounded bg-white-1 w-[458px] h-[303px]">
//         <div className="flex justify-end ml-2 ">
//           <button
//             onClick={onClose}
//             className=" text-gray-700 rounded  w-[28px] h-[28px] "
//           >
//             <CloseIcon />
//           </button>
//         </div>

//         <ul className="text-lg p-2 ml-6">
//           <li className="font-semibold text-lg">Alerto G.</li>
//           <li className="text-gray-400 text-sm">Educación</li>
//           <li className="text-gray-400 text-sm">7A</li>
//         </ul>

//         <textarea
//           value={comentarios}
//           onChange={(e) => setComentarios(e.target.value)}
//           placeholder="Escriba comentarios sobre el desempeño del estudiante en este período académico..."
//           className="p-2 border-none rounded w-[352px] h-[40px] text-sm mx-auto block text-gray-700 focus:outline-none overflow-hidden resize-none"
//           rows="4"
//           maxLength={500}
//         />

//         <div className="flex justify-between mt-2">
//           <span className="text-gray-500"></span>{" "}
//           <label className="text-gray-500 text-[10px] ">
//             {comentarios.length}/500 caracteres
//           </label>
//         </div>

//         <div className="mt-6 flex justify-end ">
//           <button
//             onClick={handleSubmit}
//             className=" flex items-center justify-center px-4 py-2 bg-brand-primary text-white-1 rounded w-[86px] h-[36px] "
//           >
//             Guardar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalJustificacion;

import React, { useState } from "react";
import { CloseIcon } from "../assets/icon/close";

const ModalComentario = ({ isOpen, onClose, onSubmit, student }) => {
  const [comentarios, setComentarios] = useState(student?.comentario || ""); // Cargar comentario existente

  const handleSubmit = () => {
    onSubmit(comentarios);
    setComentarios("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded bg-white-1 w-[458px] h-[303px]">
        <div className="flex justify-end ml-2">
          <button
            onClick={onClose}
            className="text-gray-700 rounded w-[28px] h-[28px]"
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="text-lg p-2 ml-6">
          <li className="font-semibold text-lg">{student?.nombreCompleto}</li>
          <li className="text-gray-400 text-sm">Educación</li>
          <li className="text-gray-400 text-sm">7A</li>
        </ul>

        <textarea
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
          placeholder="Escriba comentarios sobre el desempeño del estudiante en este período académico..."
          className="p-2 border-none rounded w-[352px] h-[40px] text-sm mx-auto block text-gray-700 focus:outline-none overflow-hidden resize-none"
          rows="4"
          maxLength={500}
        />

        <div className="flex justify-between mt-2">
          <span className="text-gray-500"></span>
          <label className="text-gray-500 text-[10px]">
            {comentarios.length}/500 caracteres
          </label>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center px-4 py-2 bg-brand-primary text-white-1 rounded w-[86px] h-[36px]"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComentario;
