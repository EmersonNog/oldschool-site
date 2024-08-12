// src/pages/About.js
import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import "./About.css";
import teamImage from "../../assets/Images/old_about.png";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about-card">
          <div className="about-header">
            <img
              src={teamImage}
              alt="Equipe OldSchool"
              className="about-image"
            />
            <h1 className="title">Sobre a Família OldSchool</h1>
          </div>
          <div className="about-content">
            <p>
              OldSchool é uma família vibrante e unida, onde a lealdade e o
              compromisso são os pilares que nos sustentam. Nossa família é
              conhecida por realizar sorteios internos, distribuir presentes
              para nossos membros mais engajados.
            </p>
            <p>
              Nossa família promove uma variedade de dinâmicas, incluindo salas
              de voz para conversas e interação, além de diversos jogos que
              garantem diversão e integração entre todos. Estamos sempre em
              busca de novas formas de fortalecer nossos laços e proporcionar
              experiências memoráveis para todos.
            </p>
            <p>
              Se você é apaixonado por se envolver em atividades, ganhar prêmios
              e fazer parte de uma comunidade que valoriza a amizade e o
              comprometimento, a Família OldSchool é o lugar certo para você.
              Junte-se a nós e descubra o que torna nossa família tão especial!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
