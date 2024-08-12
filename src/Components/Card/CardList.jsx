import React from "react";
import Card from "./Card";
import "./CardList.css";
import uniao from "../../assets/Images/uniao.jpg";
import diversao from "../../assets/Images/diversao.png";
import compromisso from "../../assets/Images/compromisso.jpg";
import competicao from "../../assets/Images/competicao.jpg";

const CardList = () => {
  const cardItems = [
    {
      image: uniao,
      title: "União",
      description:
        "Na OldSchool, a união é o segredo da nossa diversão e sucesso!",
    },
    {
      image: diversao,
      title: "Diversão",
      description: "Na OldSchool, a diversão nunca tem fim!",
    },
    {
      image: compromisso,
      title: "Compromisso",
      description: "Nosso compromisso é o que nos une e fortalece!",
    },
    {
      image: competicao,
      title: "Senso de Competitividade",
      description: "O senso de competição nos desafia e faz brilhar!",
    },
  ];

  return (
    <div className="card-list">
      {cardItems.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
