import React from "react";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Servicios />
        <Portfolio />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
