// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">OldSchool_</Link>
      </div>
      <ul className="navbar-links">
        {/* <li>
          <Link to="/uan">UAN</Link>
        </li> */}
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
