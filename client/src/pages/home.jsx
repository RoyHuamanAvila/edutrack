function Home() {
    return (
        <div id="home" className="max-w-[1216px] mx-auto">
            {/* Encabezado */}
            <div className="space-y-9 py-20 max-w-[656px] mx-auto">
                <h1 className="text-center">Bienvenido a EduTrack</h1>
                <p className="text-center px-10 mb-8"> Un espacio diseñado para facilitar el seguimiento y la evaluación del rendimiento académico y conectar entre sí a los docentes, estudiantes y sus tutores.</p>
                <button className="mx-auto block bg-brand-primary text-xl text-white-2 font-bold px-10 py-4 rounded-lg">Iniciar Sesión</button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-8 pt-20 mb-[208px]">
                <div className="card border-brand-primary border">
                    {/* Image card */}
                    <div className="w-full h-[232px] bg-[#6B6969]">
                        <img src="/images/estudiante.png" alt="Estudiante" />
                    </div>
                    {/* Content card */}
                    <div className="p-8">
                        <h2 className="text-h4 text-brand-primary">Estudiantes</h2>
                        <p className="text-black-1">Acceden fácilmente a su historial académico y reciben retroalimentación personalizada de sus docentes.</p>
                    </div>
                </div>

                <div className="card border-brand-primary border">
                    {/* Image card */}
                    <div className="w-full h-[232px] bg-[#6B6969]">
                        <img src="/images/docente.png" alt="Docente" />
                    </div>
                    {/* Content card */}
                    <div className="p-8">
                        <h2 className="text-h4 text-brand-primary">Docentes</h2>
                        <p className="text-black-1">Evalúan el rendimiento de sus estudiantes y ofrecen retroalimentación detallada sobre su progreso.</p>
                    </div>
                </div>

                <div className="card border-brand-primary border">
                    {/* Image card */}
                    <div className="w-full h-[232px] bg-[#6B6969]">
                        <img src="/images/tutor.png" alt="Tutor" />
                    </div>
                    {/* Content card */}
                    <div className="p-8">
                        <h2 className="text-h4 text-brand-primary">Tutores</h2>
                        <p className="text-black-1">Supervisan y acompañan el avance académico de los estudiantes para asegurar su éxito.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
