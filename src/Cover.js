import React from "react";
import "./Cover.css";

function Cover({ isHidden, onNavClick }) {
  return (
    <section id="hero" className="hero-section">
      <h2>Hello, it’s nice to meet you...</h2>
      <div className="hero-content">
        <h1>I AM RABI ALAYA</h1>
        <p className="subtitle">Software Engineer</p>
      </div>
      <Navigation isHidden={isHidden} onNavClick={onNavClick} />
    </section>
  );
}

function Navigation({ isHidden, onNavClick }) {
  return (
    <div className={`navigation ${isHidden ? "hidden" : ""}`}>
      <a href="#about" className="nav-link" onClick={onNavClick}>About Me</a>
      <a href="#projects" className="nav-link" onClick={onNavClick}>Projects</a>
      <a href="#contact" className="nav-link" onClick={onNavClick}>Contact</a>
      <a href={`${process.env.PUBLIC_URL}/Rabi_Alaya_Resume.pdf`} className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
  );
}

export default Cover;
