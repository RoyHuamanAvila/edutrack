import { useEffect, useRef, useState } from "react";

function useDropdown({ id, name, options, selectable = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const dropdownRef = useRef();

  const handleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSetOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (options) {
      setSelectedOption(options[0])
    }
  }, [options])

  const DropdownComponent = ({ children: label, className, extendClassName }) => (
    <div id={id} name={name} className={`relative w-max ${className} ${extendClassName}`}>
      <button
        ref={dropdownRef}
        onClick={handleOpen}
        id={`btn-${id}`}
        className={`${className}__btn`}
      >
        <span className={`${className}__label`}>{label}</span>
        {
          selectable && <span className={`${className}__selected-option`}>{selectedOption}</span>
        }
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={`${className}__arrow`} d="M8 11L14 17L20 11" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <ul className={`${className}__list`}>
          {options.map((option, index) => (
            <li
              key={`id_${index}`}
              onClick={() => handleSetOption(option)}
              className={`${className}__item`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return { DropdownComponent, selectedOption };
}

export default useDropdown;
