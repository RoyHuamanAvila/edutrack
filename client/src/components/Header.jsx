import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import useDropdown from '../hooks/useDropdown'

const userOptions = [
  'Configuración',
  'Cerrar Sesión'
]

const Header = () => {
  const { token, user } = useSelector((state) => state?.authentication);
  const { DropdownComponent: UserDropdown } = useDropdown({ id: 'userDropdown', name: 'userDropdown', options: userOptions, selectable: false })

  return (
    <div className='bg-white fixed top-0 right-0 left-0 bg-white-2 z-10'>
      <div className="max-w-[1216px] m-auto py-4 flex justify-between items-center">
        <div className="h-[48px]">
          <Link to='/'>
            <img
              src="/Logo.svg"
              alt="Logo Edutrack"
              className="h-[48px] w-[192px]"
            />
          </Link>
        </div>
        {
          token && user ? (
            <UserDropdown className='dropdown-outline' extendClassName='border border-brand-primary rounded-lg text-brand-primary'>
              <div className="flex items-center gap-4">
                <img src="/user.svg" alt="user icon" />
                {user?.fullName}
              </div>
            </UserDropdown>
          ) : <></>
        }
      </div>
    </div>
  );
};
export default Header;
