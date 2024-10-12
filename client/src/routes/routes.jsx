import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import Estudiante from "../pages/estudiante";
import Docente from "../pages/profesor";
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estudiante" element={<Estudiante />} />
                <Route path="/docente" element={<Docente />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}


export default MyRoutes;
