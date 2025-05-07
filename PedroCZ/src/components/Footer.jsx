import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/PedroCZMO" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/pedro-cz-mo" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://x.com/pedroczmo23" target="_blank" rel="noopener noreferrer">
          X (Twitter)
        </a>
        <a href="https://tryhackme.com/p/pedroczmo23" target="_blank" rel="noopener noreferrer">
          TryHackMe
        </a>
      </div>
      <p>© 2025 Pedro CZ. Todos los derechos reservados.</p>
    </footer>
  );
}
