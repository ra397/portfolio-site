import React from "react";
import "./Cover.css";

function Cover() {
    return (
      <div className="Cover">
        <section id="hero" className="hero-section">
          <h2>Hello, it’s nice to meet you...</h2>

          <div className="hero-content">
            <h1>I AM RABI ALAYA</h1>
            <p className="subtitle">Software Engineer</p>
          </div>

          <div className="navigation">
            <a href="#about" className="nav-link">About Me</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#resume" className="nav-link">Resume</a>
          </div>
        </section>
      </div>
    );
}

export default Cover;