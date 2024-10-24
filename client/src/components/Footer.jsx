function Footer() {
  return (
    <div className="bg-white-1 flex justify-center items-center gap-8 h-[216px] py-[55px]">
      {/* Logo */}
      <a href="/" className="h-auto w-[210px] rounded-[13px] flex items-center justify-center">
        <img src="/Logo.svg" alt="Logo Edutrack" />
      </a>

      {/* Contacto */}
      <div className="w-max">
        <p className="text-black-1 font-bold">¿Necesitas ayuda? Contáctenos</p>
        <a href="#">edutrack@gmail.com</a>
      </div>

      {/* Políticas de uso */}
      <div className="w-max space-y-2">
        <p className="font-extrabold">Políticas de uso</p>
        <a className="block" href="#">
          Términos y condiciones
        </a>
        <a className="block" href="#">
          Política de cookies
        </a>
      </div>

      {/* Redes sociales */}
      <div className="space-y-4">
        <img src="/facebook.svg" alt="Facebook Icon" />
        <img src="/instagram.svg" alt="Instagram Icon" />
      </div>
    </div>
  );
}

export default Footer;
