// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Crie um arquivo CSS para estilizar a Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">OldSchool_</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/join">Junte-se</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
