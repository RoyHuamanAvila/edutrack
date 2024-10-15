// function Footer() {
//   return (
//     <div className="py-[55px] flex justify-center items-center gap-7 mt-[100px]">
//       <div className="h-[64px] w-[175px] rounded-[13px] flex items-center justify-center bg-[#6b6969]">Logo</div>
//       <div className="w-[246px]">
//         <p className="font-extrabold">¿Necesitas ayuda? Contáctenos</p>
//         <a href="#">xxxxxxx@gmail.com</a>
//       </div>
//       <div className="w-[134px]">
//         <p className="font-extrabold">Políticas de uso</p>
//         <a className="block" href="#">Términos y condiciones</a>
//         <a className="block" href="#">Política de cookies</a>
//       </div>
//       <div>
//         <img src="/facebook.svg" alt="Facebook Icon" />
//         <img src="/instagram.svg" alt="Instagram Icon" />
//       </div>
//     </div>
//   )
// }
// export default Footer

function Footer() {
  return (
    <div className="bg-[#CDCDCD] flex justify-center items-center gap-7 h-[216px] py-[55px]">
      {/* Logo */}
      <div className="h-[64px] w-[175px] rounded-[13px] flex items-center justify-center bg-[#6b6969]">
        Logo
      </div>

      {/* Contacto */}
      <div className="w-[246px]">
        <p className="font-extrabold">¿Necesitas ayuda? Contáctenos</p>
        <a href="#">xxxxxxx@gmail.com</a>
      </div>

      {/* Políticas de uso */}
      <div className="w-[134px]">
        <p className="font-extrabold">Políticas de uso</p>
        <a className="block" href="#">
          Términos y condiciones
        </a>
        <a className="block" href="#">
          Política de cookies
        </a>
      </div>

      {/* Redes sociales */}
      <div className="flex gap-4">
        <img src="/facebook.svg" alt="Facebook Icon" />
        <img src="/instagram.svg" alt="Instagram Icon" />
      </div>
    </div>
  );
}

export default Footer;
