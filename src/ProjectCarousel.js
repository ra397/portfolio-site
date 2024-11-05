import React, { useState } from "react";
import "./ProjectCarousel.css";

const projects = [
  {
    title: "Bike GUI",
    description: "Developed a C# GUI application using WPF to support data annotation for a research study on youth cycling safety, used by a team of 15 researchers.",
    imageUrl: "/Bike-GUI-preview.png", // Replace with actual URL or local image path
    previewLink: "https://trips.lab.uiowa.edu/",
  },
  {
    title: "Etch-a-Sketch App",
    description: "A digital Etch-a-Sketch built with HTML, CSS, and JavaScript. Draw, adjust colors, brush sizes, and save your creations.",
    imageUrl: "/Etch-a-Sketch-preview.png",
    previewLink: "https://ra397.github.io/sketch/",
  },
  // Add more projects as needed
];

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="carousel-container">
      <div className="project-card">
        <a href={currentProject.previewLink} target="_blank" rel="noopener noreferrer">
          <img
            src={currentProject.imageUrl}
            alt={currentProject.title}
            className="project-image"
          />
        </a>
        <h3>{currentProject.title}</h3>
        <p>{currentProject.description}</p>
      </div>
      <button className="prev-button" onClick={prevProject}>&#9664;</button>
      <button className="next-button" onClick={nextProject}>&#9654;</button>
    </div>
  );
}

export default ProjectsCarousel;
