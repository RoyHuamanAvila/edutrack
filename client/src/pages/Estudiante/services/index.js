import axios from "axios";

const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;

export const getUserById = async (id) => {
  const response = await axios.get(`${DB_DOMAIN}/users/${id}`);
  return response.data;
};

export const getDashboard = async () => {
  const token = localStorage.getItem("authToken");
  const response = await axios.get(`${DB_DOMAIN}/students/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
