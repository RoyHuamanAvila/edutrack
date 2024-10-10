import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import Estudiante from "../pages/estudiante";
import Docente from "../pages/profesor";

function MyRoutes(){
    return(

    <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/docente" element={<Docente />} />
        
    </Routes>
    </BrowserRouter>
    );
}


export default MyRoutes;