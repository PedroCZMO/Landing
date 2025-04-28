import React, { useState } from "react";
import "../styles/Portfolio.css";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}assets/ProyectosIMG/VEOFyD1.webp`,
  `${base}assets/ProyectosIMG/VEOFyD2.webp`,
  `${base}assets/ProyectosIMG/VEOFyD3.webp`,
  `${base}assets/ProyectosIMG/VEOFyD4.webp`,
  `${base}assets/ProyectosIMG/VEOFyD5.webp`,
  `${base}assets/ProyectosIMG/VEOFyD6.webp`,
  `${base}assets/ProyectosIMG/VEOFyD7.webp`,
  `${base}assets/ProyectosIMG/VEOFyD8.webp`,
  `${base}assets/ProyectosIMG/VEOFyD9.webp`
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
            <img src={src} alt={`Captura pantalla sitio ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {zoomedImg && (
        <div className="zoom-overlay" onClick={() => setZoomedImg(null)}>
          <img src={zoomedImg} alt="Zoomed capture" loading="lazy" />
        </div>
      )}
    </section>
  );
}
