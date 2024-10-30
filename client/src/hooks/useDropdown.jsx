import { useRef, useState } from "react"

function useDropdown(id, name, options) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0])
  const dropdownRef = useRef();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleSetOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }



  const DropdownComponent = ({ children, className }) => (
    <div id={id} name={name} className="relative w-max">
      {/* Botón dropdown */}
      <button
        ref={dropdownRef}
        onClick={handleOpen}
        id={`btn-${id}`}
        className={`flex gap-4 bg-brand-primary font-bold text-white-2 px-8 py-2 rounded-lg items-center ${className}`}
      >
        <span>{children}</span> {selectedOption} <img src="/arrow-down.svg" />
      </button>

      {/* Menu dropdown */}
      {
        isOpen &&
        <ul className="border border-brand-primary rounded-lg absolute left-0 right-0 mt-2 bg-white-2">
          {
            options.map((option, index) =>
              <li
                key={`id_${index}`}
                className="block py-4 px-8 text-brand-primary font-bold hover:bg-brand-primary hover:text-white-2 cursor-pointer"
                onClick={() => handleSetOption(option)}
              >
                {option}
              </li>)
          }
        </ul>
      }
    </div>
  )

  return { DropdownComponent, selectedOption }
}

export default useDropdown
