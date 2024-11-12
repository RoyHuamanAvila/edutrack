import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import { Estudiante, Docente } from "../pages";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../pages/login'
import { Toaster } from "sonner";
import RequireAuth from "./RequireAuth";

function MyRoutes() {
    return (
        <BrowserRouter>
            <Toaster richColors />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route element={<RequireAuth />}>
                    <Route path="/estudiante" element={<Estudiante />} />
                    <Route path="/docente" element={<Docente />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}


export default MyRoutes;
