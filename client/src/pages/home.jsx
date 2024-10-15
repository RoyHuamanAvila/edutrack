function Home() {
    return (
        <div id="home">
            <div className="space-y-9 mb-[118px]">
                <h1 className="text-5xl font-extrabold text-center mt-[113px]">Bienvenido a EduTrack</h1>
                <p className="max-w-[660px] text-center m-auto"> Un espacio diseñado para facilitar el seguimiento y la evaluación del rendimiento académico y conectar entre sí a los docentes, estudiantes y sus tutores.</p>
                <button className="mx-auto block bg-[#6B6969] text-white font-semibold px-4 py-1 rounded-lg">Iniciar Sesión</button>
            </div>
            <div className="flex gap-[55px] justify-center">
                <div className="w-[335px] rounded-[21.99px] overflow-hidden pb-[13px]">
                    <div className="w-full h-[243px] bg-[#6B6969]">
                        <img src="" alt="" />
                    </div>
                    <h2 className="text-[32px] font-extrabold px-5 py-[10px]">Estudiantes</h2>
                    <p className="text-sm px-5 py-[10px]">Acceden fácilmente a tu historial académico y reciben retroalimentación de tus docentes</p>
                </div>
                <div className="w-[335px] rounded-[21.99px] overflow-hidden">
                    <div className="w-full h-[243px] bg-[#6B6969]">
                        <img src="" alt="" />
                    </div>
                    <h2 className="text-[32px] font-extrabold px-5 py-[10px]">Docentes</h2>
                    <p className="text-sm px-5 py-[10px]">Evalúan el desempeño de sus estudiantes y se comunican con los tutores sobre su progreso</p>
                </div>
                <div className="w-[335px] rounded-[21.99px] overflow-hidden">
                    <div className="w-full h-[243px] bg-[#6B6969]">
                        <img src="" alt="" />
                    </div>
                    <h2 className="text-[32px] font-extrabold px-5 py-[10px]">Tutores</h2>
                    <p className="text-sm px-5 py-[10px]">Dan seguimiento del progreso académico de los estudiantes y reciben alertas sobre eventos importantes en la escuela</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
