import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./Cover";
import About from "./About";
import ProjectCarousel from "./ProjectCarousel";
import Contact from "./Contact";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  // Handle scroll to hide/show navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsHidden(false); // Show navbar when at the top
      } else {
        setIsHidden(true); // Hide navbar when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsHidden(true); // Hide navbar after clicking a navigation link
  };

  return (
    <div className="App">
      <Cover isHidden={isHidden} onNavClick={handleNavClick} />
      <About />
      <section id="projects" className="content-section">
        <h2>Projects</h2>
        <ProjectCarousel />
      </section>
      <Contact />
    </div>
  );
}

export default App;
