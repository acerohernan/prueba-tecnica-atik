import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  AiOutlineDown as DownIcon,
  AiOutlineUp as UpIcon,
} from "react-icons/ai";

interface Props {
  options: string[];
  selectedOption: string;
  width: string;
  blue?: boolean;
}

const Dropdown: React.FC<Props> = ({
  options,
  selectedOption,
  width,
  blue,
}) => {
  const [selected, setSelected] = useState(selectedOption);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const containerRef: RefObject<any> = useRef(null);

  const handleSelectOption = (option: string) => () => {
    setSelected(option);
    setMenuIsOpen(false);
  };

  function handleClickOutside(event: MouseEvent) {
    if (
      menuIsOpen &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setSelected(selectedOption);
      setMenuIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, menuIsOpen]);

  return (
    <div className="app__dropdown" style={{ width: width }} ref={containerRef}>
      <button
        className="app__dropdown_main"
        style={{
          width: width,
          backgroundColor: blue ? "rgb(0, 81, 255)" : "white",
          color: blue ? "white" : "black",
        }}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {selected}
        {menuIsOpen ? <UpIcon /> : <DownIcon />}
      </button>
      {menuIsOpen && (
        <div className="app__dropdown_menu">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={handleSelectOption(option)}
              style={{
                width: width,
                color: "black",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
