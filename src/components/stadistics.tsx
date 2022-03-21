import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function Stadistics() {
  return (
    <div className="app__stadistics">
      <div className="app__stadistics_header">
        <div className="app__stadistics_header-left">
          <h2>Estadísticas de ventas</h2>
          <span>Consulte los horarios cons mayores venta</span>
        </div>
        <div className="app__stadistics_header-right">
          <span>Fecha:</span>
          <div className="app__stadistics_date">
            <div>
              <FaRegCalendarAlt />
              01/10/20
            </div>
            <button className="app__stadistics_date_button">Hoy</button>
          </div>
        </div>
      </div>
      <div className="app__stadistics_body">
        <h2>Facturación neta(Q.)</h2>
        <div className="app__stadistics_chart" />
      </div>
    </div>
  );
}

export default Stadistics;
