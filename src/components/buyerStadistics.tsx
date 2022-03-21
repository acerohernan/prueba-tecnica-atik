import React, { useState } from "react";

const StadisticMenu = () => {
  const [active, setActive] = useState("Anual");

  return (
    <div className="app__buyer-stadistics_menu">
      {["Anual", "Mensual", "Semanal", "Diario"].map((item, index) => {
        if (item === active) {
          return (
            <button
              key={index}
              style={{ backgroundColor: "rgb(0, 81, 255)", color: "white" }}
              onClick={() => {
                setActive(item);
              }}
            >
              {item}
            </button>
          );
        }
        return (
          <button
            key={index}
            onClick={() => {
              setActive(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

function BuyerStadistic() {
  return (
    <div className="app__buyer-stadistics">
      <div className="app__buyer-stadistics_header">
        <div className="app__buyer-stadistics_header-left">
          <h2>Estadísticas de los compradores</h2>
        </div>
        <StadisticMenu />
      </div>
      <div className="app__buyer-stadistics_body">
        <div className="app__buyer-stadistics_chart" />
      </div>
    </div>
  );
}

export default BuyerStadistic;
