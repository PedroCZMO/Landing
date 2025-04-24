import React from "react";
import "../styles/Servicios.css";

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
    <h2>SERVICIOS</h2>
    <div className="servicesCards">
        <div className="serviceCard">
            <h3>🔒 Auditoría de Seguridad Web</h3>
            <p>Analizo tu web en busca de vulnerabilidades (tipo OWASP Top 10), te entrego un informe claro y recomendaciones prácticas.</p>
            <a href="#contacto" className="btnAuditoria">Solicita tu auditoría 🔍</a>
        </div>

        <div className="serviceCard">
            <h3>⚙️ Desarrollo Web Seguro</h3>
            <p>Diseño sitios web rápidos, modernos y con buenas prácticas de seguridad desde el código. Wordpress o React a medida.</p>
            <a href="#contacto" className="btnAuditoria">Solicita tu auditoría 🔍</a>
        </div>

        <div className="serviceCard">
            <h3>🧠 Consultoría Técnica</h3>
            <p>¿Dudas sobre la seguridad de tu proyecto? Te ayudo a evaluar y fortalecer tu stack actual.</p>
            <a href="#contacto" className="btnAuditoria">Solicita tu auditoría 🔍</a>
        </div>
        
    </div>
    </section>
  );
}