import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Cover from "./Cover";
import About from "./About";
import ProjectCarousel from "./ProjectCarousel";
import Contact from "./Contact";


function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Optimized scroll handler using useCallback
  const handleScroll = useCallback(() => {
    if (!isNavigating) {
      setIsHidden(window.scrollY > 0);
    } else if (window.scrollY === 0) {
      setIsHidden(false);
    }
  }, [isNavigating]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = () => {
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 500);
  };

  return (
    <div className="App">
      <Cover isHidden={isHidden} onNavClick={handleNavClick} />
      <About />
      <section id="projects" className="content-section">
        <h2>Projects</h2>
        <ProjectCarousel/>
      </section>

      <Contact />
    </div>
  );
}

export default App;
