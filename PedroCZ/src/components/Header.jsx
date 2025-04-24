import React from "react";
import logo from "../assets/PedroCZ-Logo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
    <div className="headerLogo">
      <img src={logo} alt="Logo de PedroCZ" />
      <p className="tagline">Webs modernas, rápidas y seguras, listas para resistir ataques.</p>
      </div>
    <div className="headerA">
        <a href="#servicios">Servicios</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacto">Contacto</a>
    </div>
    </header>
  );
}
