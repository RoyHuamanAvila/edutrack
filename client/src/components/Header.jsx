import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-[15.3px] px-[28.778px] flex justify-between items-center bg-white">
      <div className="h-[57px]">
        <Link to='/'>
          <img
            src="/Logo.svg"
            alt="Logo Edutrack"
            className="h-[48px] w-[192px]"
          />
        </Link>
      </div>
      {/* <a
        href="#"
        className="text-[10.792px] font-extrabold w-[98px] h-[58px] p-[8.993px] bg-[#CDCDCD] flex justify-center items-center rounded-[15.288px] gap-[8.993px]"
      >
        <img src="/user.svg" alt="user icon" /> Usuario
      </a> */}
    </div>
  );
};
export default Header;
