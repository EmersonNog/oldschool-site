import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AdminCard.css";

const AdminCard = ({ id, image, name, description, icon }) => {
  return (
    <div className="admin-card" id={id}>
      <img src={image} alt={name} className="admin-image" />
      <div className="admin-info">
        <FontAwesomeIcon icon={icon} className="admin-icon" />
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
      <div className="admin-id">ID: {id}</div> {/* Exibe o ID */}
    </div>
  );
};

export default AdminCard;
