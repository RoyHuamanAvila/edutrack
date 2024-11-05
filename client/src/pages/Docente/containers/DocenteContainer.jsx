import { useEffect, useState } from "react"
import DocenteView from "../components/DocenteView"
import { decryptToken } from "../../../token";
import { getDocenteById } from "../services";
import { useDispatch } from 'react-redux'
import { setUser } from '../../../features/authSlice'

const DocenteContainer = () => {
  const [docente, setDocente] = useState({
    imgProfile: "https://s3-alpha-sig.figma.com/img/2cc3/ba92/c0a402567bf37e095262f204b3eb3c99?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=glLoEH76iElOPQwm5Yd608lK~2LEAmdwaPb2kUz5EEAVlWDqvxTZRBssOcYcL32MedneUlDhxxMBE9dVMT5akoLO1IDLHbdn1UfvOvrK~uOGklPyVfglB-X9sGqtmLW~jm6ef~TvIGUjXvrns~D9i560oWSN9RFA~yNEj0P-Diqkfon47pH9z9xpZObgVglwf3P78wwQxIzIeMWI0ONo4WxYP5LIHOgtC75BQY90gcTNhaF6zkPPG-yzuyyd16A7~Z0pEeBLMeBSg3zyL3OJ7iQA5Ew9okqK6q9giLXTJ5oBVtWXU0E53dUuWVBT7WPE9uQswiemPVYQtkSNf5E5xg__",
    teacherName: 'José Alba',
    teacherId: 1124743862,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetDocenteData = async () => {
      const userDataToken = decryptToken();
      const docenteId = userDataToken.id;
      console.log(userDataToken)
      try {
        const docenteFetchData = await getDocenteById(docenteId);
        setDocente(docenteFetchData);
        dispatch(setUser(docenteFetchData?.user))
      } catch (error) {
        console.log(error)
      }
    }

    handleGetDocenteData();
  }, [dispatch])

  return (
    <DocenteView docente={docente} />
  )
}
export default DocenteContainer
