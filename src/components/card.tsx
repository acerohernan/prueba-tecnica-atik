import React from "react";
import { AiOutlineRight as RightIcon } from "react-icons/ai";

interface Props {
  title: string;
  number: string;
}

const Card: React.FC<Props> = ({ title, number }) => {
  return (
    <div className="app__card">
      <h1>{title}</h1>
      <div className="app__card_body">
        <span>{number}</span>
        <button>
          Ver detalles
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
