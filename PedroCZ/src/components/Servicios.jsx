import React from "react";
import "../styles/Servicios.css";

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
    <h2>SERVICIOS</h2>
    <div className="servicesCards">
        <div className="serviceCard">
            <h3>🔒 Auditoría de Seguridad Web</h3>
            <p>Identifico vulnerabilidades en tu web (OWASP Top 10 y más) y te entrego un informe técnico claro con soluciones prácticas para reforzar tu seguridad.</p>
            <a href="#contacto" className="btnAuditoria">Solicita tu informe 🔍</a>
        </div>

        <div className="serviceCard">
            <h3>⚙️ Desarrollo Web Seguro</h3>
            <p>Desarrollo sitios web rápidos, modernos y seguros desde el código. WordPress o React personalizados, aplicando buenas prácticas y hardening.</p>
            <a href="#contacto" className="btnAuditoria">Solicita tu web segura ⚙️</a>
        </div>

        <div className="serviceCard">
            <h3>🧠 Consultoría Técnica</h3>
            <p>¿Tienes dudas sobre la seguridad de tu proyecto? Te ayudo a revisar tu infraestructura, detectar riesgos y reforzar tu stack tecnológico.</p>
            <a href="#contacto" className="btnAuditoria">Consulta sin compromiso 💬</a>
        </div>
        
    </div>
    </section>
  );
}