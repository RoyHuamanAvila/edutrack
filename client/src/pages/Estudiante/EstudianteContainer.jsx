/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getToken } from "../../token";
import axios from "axios";
import EstudianteView from "./EstudianteView";

const EstudianteContainer = () => {
  const [student, setStudent] = useState();
  const [promedio, setPromedio] = useState();
  const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN;
  const token = getToken();

  const fetchUser = async () => {
    try {
      console.log("Token: ", token);
      const response = await axios.get(`${DB_DOMAIN}/students/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setStudent(response.data);
      setPromedio(obtainPromedio(response.data.courses))
    } catch (error) {
      console.log(error);
    }
  };

  const obtainPromedio = (courses) => {
    const initialValue = 0;
    const sum = courses.reduce((previousValue, current) => previousValue + current.grades[0].gradeValue, initialValue);
    return Math.round(sum / courses.length);
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return <EstudianteView {...student} promedio={promedio} />
}
export default EstudianteContainer
