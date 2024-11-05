import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:rabi-alaya@uiowa.edu" className="contact-icon" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/ralaya" className="contact-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ra397" className="contact-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.strava.com/athletes/127552092" className="contact-icon" aria-label="Strava" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-strava"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
