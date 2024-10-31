import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, user, onSave }) => {
  const [fullName, setFullName] = useState("");
  const [userId, setUserId] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");

  // Efecto para cargar los datos del usuario al abrir el modal
  useEffect(() => {
    if (isOpen && user) {
      setFullName(user.fullName || "");
      setUserId(user.userId || "");
      setProfileImageUrl(user.profileImageUrl || "");
    }
  }, [isOpen, user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageUrl(reader.result); // Establecer la nueva URL de la imagen
      };
      reader.readAsDataURL(file); // Convertir la imagen a una URL base64
    }
  };

  const handleSave = () => {
    onSave({ ...user, fullName, userId, profileImageUrl });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white-1 rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4">Configuración</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Id:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            disabled // Puedes quitar esto si deseas que el ID sea editable
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Foto de Perfil:
          </label>
          {profileImageUrl && (
            <img
              src={profileImageUrl}
              alt="Previsualización"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded w-full p-2 mt-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 bg-gray-300 text-black rounded px-4 py-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-brand-primary 0 text-white rounded px-4 py-2"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
