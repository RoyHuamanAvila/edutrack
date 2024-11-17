import TutorView from "../Components/TutorView"
import { useEffect, useState } from "react";
import { getParentById } from "../Services";

const TutorContainer = () => {
  const [tutor, setTutor] = useState();

  const fetchParent = async () => {
    const id = localStorage.getItem('id')
    const data = await getParentById(id);
    setTutor(data)
  }

  useEffect(() => {
    fetchParent()
  }, [])


  return <TutorView tutor={tutor} />
}
export default TutorContainer
