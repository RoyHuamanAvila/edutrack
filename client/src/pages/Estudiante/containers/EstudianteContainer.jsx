
import { useEffect, useState } from "react"
import EstudianteView from "../components/EstudianteView";
import { getDashboard, getUserById } from "../services";

const EstudianteContainer = () => {
  const [user, setUser] = useState();
  const [dashboard, setDashboard] = useState();
  const [average, setAverage] = useState(0);

  const fetchUser = async () => {
    try {
      const id = localStorage.getItem('id');
      const userData = await getUserById(id);
      setUser(userData);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchDashboard = async () => {
    try {
      const dashboardData = await getDashboard();
      console.log(dashboardData)
      setDashboard(dashboardData);
    } catch (error) {
      console.log(error)
    }
  }



  /*   const obtainPromedio = (courses) => {
      const initialValue = 0;
      const sum = courses.reduce((previousValue, current) => previousValue + current.grades[0].gradeValue, initialValue);
      return Math.round(sum / courses.length);
    } */

  useEffect(() => {
    fetchUser();
    fetchDashboard();
  }, [])

  useEffect(() => {
    const calculateAverage = () => {
      if (dashboard) {
        const initialState = 0;
        const sum = dashboard.Courses.reduce((accumulator, currentValue) => accumulator + currentValue.teachers[0].gradeValue, initialState)
        setAverage(Math.round(sum / dashboard.Courses.length));
      }
    }

    calculateAverage();
  }, [dashboard])

  return <EstudianteView user={user} courses={dashboard?.Courses} average={average} />
}
export default EstudianteContainer
