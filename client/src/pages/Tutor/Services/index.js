import axios from "axios";

const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;
const token = localStorage.getItem("authToken");

export const getParentById = async (id) => {
  const response = await axios.get(`${DB_DOMAIN}/parents/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
