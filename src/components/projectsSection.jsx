import React from "react";
import { Link } from "react-router-dom";
import "../styles/projectsSection.css";
import Project from "./project";

const ProjectsSection = () => {
  return (
    <div id="projects" className="text-light container">
      <h2>Personal Projects</h2>
      <div
        style={{
          height: "2px",
          border: "1px solid white",
          width: "70%",
          margin: "0 auto",
          marginBottom: "50px",
        }}></div>
      <div id="projectDiv" className="row">
        <Project
          heading="Wordle (Java)"
          subheading="College Assignment"
          src="images/projects/wordle/wordle.png"
          path="/wordle"
        />
        <Link to="/arduino-roulette">Arduino Roulette</Link>
        <Link to="/octal-counter">Octal Counter</Link>
        <Link to="/pdf-app">PDF App</Link>
        <Link to="/adelindiac-website">This Website</Link>
        <Link to="qr-app">QR App (for internship)</Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
