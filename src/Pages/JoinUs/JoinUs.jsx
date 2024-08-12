// src/pages/JoinUs.js
import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import "./JoinUs.css";
import Footer from "../../Components/Footer/Footer";
import joinImage from "../../assets/Images/join.jpeg";

function Join() {
  const handleJoinClick = () => {
    window.location.href = "https://chat.whatsapp.com/HWVOEq5XCzcIuCTXxgIQbb";
  };

  return (
    <div>
      <Navbar />
      <div className="joinus-container">
        <div className="joinus-card">
          <img
            src={joinImage}
            alt="Junte-se à Família OldSchool"
            className="joinus-image"
          />
          <h1 className="title">Junte-se à Família OldSchool!</h1>
          <p className="instruction">
            Nossa comunidade está crescendo e queremos você conosco! Junte-se a
            nós e descubra um ambiente amigável e acolhedor. Clique no botão
            abaixo para entrar em contato com nosso grupo de recrutamento e
            começar sua jornada com a Família OldSchool.
          </p>
          <button onClick={handleJoinClick} className="join-button">
            Quero me juntar!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Join;
