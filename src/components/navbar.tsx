import React, { RefObject, useEffect, useRef, useState } from "react";
import logoImg from "../assets/logo.png";

import {
  AiFillBell as IconBell,
  AiOutlineDown as ArrowDown,
} from "react-icons/ai";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const containerRef: RefObject<any> = useRef(null);

  function handleClickOutside(event: MouseEvent) {
    if (
      openMenu &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setOpenMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, openMenu]);

  return (
    <div className="app__navbar">
      <img className="app__navbar_logo" src={logoImg} alt="logo" />
      <div className="app__navbar_right">
        <IconBell className="app__navbar_bell" />
        <div
          className="app__navbar_menu"
          ref={containerRef}
          onClick={handleOpenMenu}
        >
          <div className="app__navbar_profile" />
          <button className="app__navbar_profile-button">
            <ArrowDown />
          </button>
          {openMenu && (
            <div className="app__navbar_menu_options">
              <span>Perfil de Empresa</span>
              <span>Cerrar Sesión</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
