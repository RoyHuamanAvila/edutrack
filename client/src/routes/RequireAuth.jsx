import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { verifyToken } from "../features/authThunks";
import Header from '../components/Header'
import Spinner from "../components/Spinner";

const RequireAuth = () => {
  const { authenticated } = useSelector(state => state.authentication);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleVerifyToken = async () => {
      setLoading(true)
      try {
        await dispatch(verifyToken())
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, [1000])
      }
    }
    handleVerifyToken();
  }, [dispatch])

  if (loading) return <Spinner />

  if (!authenticated && !loading) {
    return <Navigate to='/login' />
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default RequireAuth
