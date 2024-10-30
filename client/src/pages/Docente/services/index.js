import axios from "axios";

const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;

export const getDocenteById = async (id) => {
  const response = await axios.get(`${DB_DOMAIN}/teachers/${id}`);
  const data = response.data;

  return data;
};
