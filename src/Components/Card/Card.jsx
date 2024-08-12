import React from "react";
import "./Card.css"; // Arquivo CSS para estilização dos cards

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + image}
        alt={title}
        className="card-image"
      />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
