import { useSelector } from 'react-redux'

const Header = () => {
  const { token, user } = useSelector((state) => state?.authentication);

  return (
    <div className="py-[15.3px] px-[28.778px] flex justify-between items-center bg-white">
      <div className="h-[57px]">
        <img
          src="/Logo.svg"
          alt="Logo Edutrack"
          className="h-[48px] w-[192px]"
        />
      </div>
      {
        token && user ? (
          <button className='flex items-center text-brand-primary font-bold gap-4 border border-brand-primary rounded-lg px-8 py-2'>
            <img src="/user.svg" alt="user icon" /> {user?.fullName} <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11L14 17L20 11" stroke="#722b76" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : <></>
      }
    </div>
  );
};
export default Header;
