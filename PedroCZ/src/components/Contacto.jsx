import React from "react";
import "../styles/Contacto.css";

export default function Contacto() {
  return (
  <section id="contacto" className="contacto">
  <h2>CONTACTO</h2>
  <form action="https://getform.io/f/bkkyqwqb" method="POST">
    <input type="text" name="nombre" placeholder="Tu nombre" required />
    <input type="email" name="email" placeholder="Tu email" required />
    <input type="hidden" name="_gotcha" style={{ display: "none" }}/>
    <textarea name="mensaje" placeholder="¿Cómo puedo ayudarte?" required></textarea>
    <button type="submit">Enviar</button>
  </form>
  </section>

  );
}
