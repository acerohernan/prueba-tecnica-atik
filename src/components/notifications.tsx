import React from "react";
import { HiMail } from "react-icons/hi";

interface ItemProps {
  read?: boolean;
}

const NotificationItem: React.FC<ItemProps> = ({ read }) => {
  if (read) {
    return (
      <div className="app__notifications_item">
        <div className="app__notifications_item_body_read">
          <div>
            <h4>Traslados</h4>
            <h5>Traslado en proceso</h5>
            <span>Desde: San Telmo, Hacia: Plaza mayor</span>
          </div>
          <HiMail />
        </div>
        <span className="app__notifications_item_date_read">
          <b>Hace:</b> 30min
        </span>
      </div>
    );
  }

  return (
    <div className="app__notifications_item">
      <div className="app__notifications_item_body">
        <div>
          <h4>Traslados</h4>
          <h5>Traslado en proceso</h5>
          <span>Desde: San Telmo, Hacia: Plaza mayor</span>
        </div>
        <HiMail />
      </div>
      <span className="app__notifications_item_date">
        <b>Hace:</b> 30min
      </span>
    </div>
  );
};

function Notifications() {
  return (
    <div className="app__notifications">
      <div className="app__notifications_header">
        <h2>Notificaciones</h2>
        <select>
          <option>Ver todo</option>
          <option>No leídas</option>
          <option>Más recientes</option>
          <option>Más antiguas</option>
        </select>
      </div>
      <div className="app__notifications_body">
        <NotificationItem />
        <NotificationItem read />
      </div>
    </div>
  );
}

export default Notifications;
