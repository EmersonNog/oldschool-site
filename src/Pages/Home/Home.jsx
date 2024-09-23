import React from "react";
import { Link } from "react-router-dom";
import CardList from "../../Components/Card/CardList";
import NavBar from "../../Components/NavBar/NavBar";
import MapComponent from "../../Components/Map/Map";
import AdminCard from "../../Components/AdminCard/AdminCard";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import brasao from "../../assets/Images/brasao.png";
import admin from "../../assets/Images/admin.png";
import masks from "../../assets/Images/masks.png";
import {
  faCrown,
  faStar,
  faShieldAlt,
  faMasksTheater,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div id="home-container">
      <NavBar />
      <div className="content">
        <img src={brasao} className="brasao" alt="Brasão" />
        <h1>Bem-vindo à OldSchool</h1>
        <p className="introdution">
          Criada em 11 de maio de 2024, a família OldSchool é um grupo vibrante
          e dinâmico na plataforma WePlay. Com uma paixão por jogos e diversão,
          a OldSchool valoriza a camaradagem, a diversão e a interação amigável
          entre seus membros. Seja em uma partida animada ou em um bate-papo
          descontraído, a OldSchool está sempre pronta para oferecer uma
          experiência envolvente e divertida para todos.{" "}
          <Link to="/join" className="join-link">
            Junte-se a nós
          </Link>{" "}
          e faça parte de uma comunidade onde o espírito de diversão e a amizade
          estão sempre em alta!
        </p>
        <CardList />
        <p className="lema">
          Com a força de um alce e o espírito imponente, unimos nossas forças e
          avançamos como uma só família.
        </p>
      </div>
      <section className="map-section">
        <h2>Por onde estamos</h2>
        <p>
          Confira a localização dos nossos membros em diferentes estados. <br />
          Veja onde cada um de nós está e como estamos espalhados pelo Brasil!
        </p>
        <MapComponent />
      </section>
      <section className="admins-section">
        <h2>Conheça os Administradores e alguns traidores...</h2>
        <p>
          Aqui estão os administradores dedicados que ajudam a manter o grupo
          unido e funcionando e uns que decidiram trair a familia.
          <br />
          {/* Eles são a força motriz por trás de nossa comunidade! */}
        </p>
        <div className="admins-list">
          <AdminCard
            image={admin}
            name="Nogueira"
            description="Patriarca"
            icon={faCrown}
            id="@noggueira"
          />
          <AdminCard
            image={admin}
            name="Miau"
            description="Subchefe"
            icon={faStar}
            id="@Pbf1606"
          />
          <AdminCard
            image={masks}
            name="Júlia"
            description="Traidora"
            icon={faStar}
            id="@juliaflavia"
          />
          <AdminCard
            image={masks}
            name="Rick"
            description="Traidor"
            icon={faStar}
            id="@rickwilliam"
          />
          <AdminCard
            image={masks}
            name="Gusmão"
            description="Traidora"
            icon={faMasksTheater}
            id="@dgusmao"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
