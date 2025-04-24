import React, { useState } from "react";
import "../styles/Portfolio.css";

const images = [
  "/assets/ProyectosIMG/VEOFyD1.png",
  "/assets/ProyectosIMG/VEOFyD2.png",
  "/assets/ProyectosIMG/VEOFyD3.png",
  "/assets/ProyectosIMG/VEOFyD4.png",
  "/assets/ProyectosIMG/VEOFyD5.png",
  "/assets/ProyectosIMG/VEOFyD6.png",
  "/assets/ProyectosIMG/VEOFyD7.png",
  "/assets/ProyectosIMG/VEOFyD8.png",
  "/assets/ProyectosIMG/VEOFyD9.png"
];

export default function Portfolio() {
  const [zoomedImg, setZoomedImg] = useState(null);

  return (
    <section id="portfolio" className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="project">
        <h3>VEO Fotografía y Diseño</h3>
        <p>
          Diseño y desarrollo de una web optimizada para un negocio de fotografía y diseño.
          Velocidad y SEO como prioridad.
        </p>
      </div>

      <div className="portfolio-gallery">
        {images.map((src, index) => (
          <div key={index} className="portfolio-item" onClick={() => setZoomedImg(src)}>
            <img src={src} alt={`Captura ${index + 1}`} />
          </div>
        ))}
      </div>

      {zoomedImg && (
        <div className="zoom-overlay" onClick={() => setZoomedImg(null)}>
          <img src={zoomedImg} alt="Zoomed capture" />
        </div>
      )}
    </section>
  );
}
