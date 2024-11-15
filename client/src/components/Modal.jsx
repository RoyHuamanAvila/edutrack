import { useState } from "react";
import { toast } from "sonner";
import { Success } from '../components/Toast'

const ModalComentario = ({ isOpen, onClose, onSubmit, student }) => {
  const [comentarios, setComentarios] = useState(student?.comentario || ""); // Cargar comentario existente

  const handleSubmit = () => {
    onSubmit(comentarios);
    setComentarios("");
    onClose();
    toast(<Success title='Comentario registrado' content='Se envió con éxito' />)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-10 pb-6 rounded-lg border border-brand-primary bg-white-1 w-[458px] relative">
        <div className="absolute top-2 right-2">
          <button
            onClick={onClose}
            className="text-gray-700 rounded size-[28px]"
          >
            <img className="size-6" src="/cancel.svg" alt="cancel icon" />
          </button>
        </div>

        <ul className="text-lg mb-2">
          <li className="font-semibold text-xl">{student?.nombreCompleto}</li>
          <li className="text-grey-1 font-bold">Matemáticas</li>
          <li className="text-grey-1 font-bold">7A</li>
        </ul>

        <textarea
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
          placeholder="Escriba comentarios sobre el desempeño del estudiante en este período académico..."
          className="p-2 border border-lg border-grey-2 py-2 rounded w-full mx-auto block text-black-2 placeholder:text-grey-2 focus:outline-none overflow-hidden resize-none"
          rows="2"
          maxLength={500}
        />

        <div className="flex justify-between mt-2 mb-6">
          <label className="ml-auto text-grey-1 text-[14px]">
            {comentarios.length}/500 caracteres
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="ml-auto flex items-center justify-center px-4 py-2 bg-brand-primary text-white-1 rounded-lg"
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ModalComentario;
