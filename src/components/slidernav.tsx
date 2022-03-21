import React from "react";
import {
  AiOutlineRight as RightArrow,
  AiOutlineLeft as LeftArrow,
  AiOutlineInbox as BoxIcon,
  AiFillSetting as SettingsIcon,
} from "react-icons/ai";
import {
  MdSpaceDashboard as DashboardIcon,
  MdListAlt as ListIcon,
} from "react-icons/md";
import { IoMdWallet as WalletIcon } from "react-icons/io";
import {
  FaBoxOpen as BoxIcon2,
  FaUsers as UsersIcon,
  FaTruck as TruckIcon,
  FaUserPlus as AddUserIcon,
} from "react-icons/fa";
import { BsHeadset as HeadsetIcon } from "react-icons/bs";

function SliderNav() {
  return (
    <div className="app__slider-nav">
      <div className="app__slider-nav_buttons">
        <RightArrow />
        <DashboardIcon />
        <ListIcon />
        <BoxIcon />
        <WalletIcon />
        <BoxIcon2 />
        <UsersIcon />
        <TruckIcon />
        <AddUserIcon />
        <SettingsIcon />
        <HeadsetIcon />
      </div>
      <div className="app__slider-nav_menu">
        <a className="app__slider-nav_option" href="#">
          <LeftArrow />
          <span>Ocultar</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <DashboardIcon />
          <span>Dashboard</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <ListIcon />
          <span>Historial de operaciones</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <BoxIcon />
          <span>Caja - Vender</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <WalletIcon />
          <span>Cortes de caja</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <BoxIcon2 />
          <span>Inventario</span>
        </a>

        <a className="app__slider-nav_option" href="#">
          <UsersIcon />
          <span>Clientes</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <TruckIcon />
          <span>Traslados</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <AddUserIcon />
          <span>Usuarios</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <SettingsIcon />
          <span>Configuración</span>
        </a>
        <a className="app__slider-nav_option" href="#">
          <HeadsetIcon />
          <span>Ayuda</span>
        </a>
      </div>
    </div>
  );
}

export default SliderNav;
