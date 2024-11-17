const TutorView = ({ tutor }) => {
  return (
    <div className="mt-[152px] max-w-[1216px] m-auto">
      <h2 className="text-center text-h3 mb-8">Bienvenido(a)</h2>
      <div className="card border border-brand-primary w-max mx-auto flex gap-8 mb-14">
        <img className="h-[174px] w-[200px] object-cover" src={tutor?.profileImageUrl} alt="Tutor photo" />
        <div className="py-10 pr-8">
          <p className="text-h5 font-bold text-grey-1 leading-5">Tutor</p>
          <p className="text-h4 text-brand-primary font-bold mb-2 leading-9">{tutor?.parentName}</p>
          <p className="text-xl text-grey-1 font-bold leading-5">Teléfono: <span className="text-brand-primary">{tutor?.phoneNumber}</span></p>
        </div>
      </div>
      <h3 className="text-h5">Estudiantes a cargo</h3>
      <p className="text-grey-2 font-bold mb-6">Selecciona el estudiante para visualizar su historial académico </p>
      <div className="flex gap-8 items-center">
        {
          tutor?.students?.map((student) => (
            <div className="card border border-brand-primary mx-auto flex gap-8 mb-14 w-full" key={student?.studentId}>
              <img className="h-[174px] w-[200px] object-cover object-top" src={student?.profileImageUrl} alt="Tutor photo" />
              <div className="py-10 pr-8">
                <p className="text-h5 font-bold text-grey-1 leading-5">Tutor</p>
                <p className="text-h4 text-brand-primary font-bold mb-2 leading-9">{student?.studentName}</p>
                <p className="text-xl text-grey-1 font-bold leading-5">ID: <span className="text-brand-primary">{student?.studentId}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default TutorView
