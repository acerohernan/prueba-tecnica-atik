import React from "react";
import { AiOutlineRight as RightIcon } from "react-icons/ai";
import BuyerStadistic from "../components/buyerStadistics";
import Card from "../components/card";
import Dropdown from "../components/dropdown";
import Products from "../components/products";
import Ranking from "../components/ranking";
import Stadistics from "../components/stadistics";

function Home() {
  return (
    <div className="app__home">
      <div className="app__home_wraper">
        <div className="app__home_header">
          <h1 className="app__home_title">Dashboard</h1>
          <RightIcon />
          <Dropdown
            options={["Todas las tiendas", "San Antonio", "Plaza de armas"]}
            selectedOption="Todas las tiendas"
            width="215px"
          />
        </div>

        <div className="app__home_body">
          <div className="app__home_cards">
            <Card title="N* de productos en inventario" number="1,250" />
            <Card title="Facturación del día" number="1,250" />
            <Card title="Usuarios registrados" number="12" />
          </div>
          <div className="app__home_stadistics">
            <Stadistics />
            <div className="app__home_details">
              <div className="app__home_detail">
                <h2>Membresía</h2>
                <h3>Días restantes</h3>
                <span>15 días - 24 horas</span>
                <h3>Fecha de expiración</h3>
                <div className="app__home_detail_expiration">
                  <span>15 - 10 - 2020</span>
                  <button className="app__home_detail_button">
                    Renovar
                    <RightIcon />
                  </button>
                </div>
              </div>
              <div className="app__home_detail">
                <h2>Traslados</h2>
                <h3>En proceso</h3>
                <span>San Isidro a Plaza</span>
                <button className="app__home_detail_button_second">
                  Más información
                  <RightIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="app__home_stadistics_ranking">
            <Ranking />
            <BuyerStadistic />
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Home;
