// App.js
import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import "./App.css";
import "./ProjectCarousel.css"
import Cover from "./Cover";

function App() {
  return (
    <div className="App">
      <Cover></Cover>
      
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>I'm a computer science student with a passion for developing efficient and scalable software solutions...</p>
      </section>
      
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <ProjectCarousel ></ProjectCarousel>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
