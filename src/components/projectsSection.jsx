import React from "react";
import "../styles/projectsSection.css";
import Project from "./project";
import LineDivider from "./lineDivider";

const ProjectsSection = () => {
  return (
    <div id="projects" className="text-light container">
      <h2>Personal Projects</h2>
      <LineDivider />
      <div id="projectDiv" className="row">
        <Project
          heading="Wordle"
          subheading="College Assignment"
          src="images/projects/wordle.png"
          path="/wordle"
        />
        <Project
          heading="Arduino Contactless Roulette"
          subheading="Personal Project / College Assignment"
          src="images/projects/contactless-roulette2.png"
          path="/arduino-roulette"
        />
        <Project
          heading="PDF App"
          subheading="Personal Project"
          src="images/projects/pdf-app.png"
          path="pdf-app"
        />
        <Project
          heading="This Website"
          subheading="Personal Project"
          src="images/projects/adelindiac-website.png"
          path="/adelindiac-website"
          style={{ boxShadow: "0 0 4px 1px rgba(255,255,255,0.5)" }}
        />
        <Project
          heading="College Electronics"
          subheading="College Assignment"
          src="images/projects/electronics-0-99-counter.jpg"
          path="/electronics"
        />
        {/* <Link to="qr-app">QR App (for internship)</Link> */}
        Maybe use firestore to load images inside the pages for the projects so
        that quality is high
      </div>
    </div>
  );
};

export default ProjectsSection;
