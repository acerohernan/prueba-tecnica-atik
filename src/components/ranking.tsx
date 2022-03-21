import React from "react";
import { AiOutlineRight as RightIcon } from "react-icons/ai";
import { IoMdCloudDownload as DownloadIcon } from "react-icons/io";

function Ranking() {
  return (
    <div className="app__ranking">
      <div className="app__ranking_header">
        <h3>Ranking de compradores</h3>
        <DownloadIcon />
      </div>
      <div className="app__ranking_list">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="app__ranking_item" key={i}>
            <div className="app__ranking_item_section">
              <h4>Nombre</h4>
              <span>Marcos Solis</span>
            </div>
            <div className="app__ranking_item_section">
              <h4>Valor de vida del cliente</h4>
              <span>Q. 15,256.33</span>
            </div>
            <button className="app__ranking_item_button">
              <RightIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;
