import { jwtDecode } from 'jwt-decode'

// Guarda el token en el localStorage
export const setToken = (token) => {
  localStorage.setItem("authToken", token);
};

// Recupera el token del localStorage
export const getToken = () => {
  return localStorage.getItem("authToken");
};

// Elimina el token del localStorage
export const removeToken = () => {
  localStorage.removeItem("authToken");
};

export const decryptToken = () => {
  const token = localStorage.getItem("authToken");
  return jwtDecode(token);
}
