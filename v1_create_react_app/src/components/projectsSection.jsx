import React, { useEffect, useMemo, useState } from "react";
import "../styles/projectsSection.css";
import Project from "./project";
import LineDivider from "./lineDivider";
import { Button, Spinner } from "react-bootstrap";

const ProjectsSection = () => {
  const PROJECTS = useMemo(() => {
    return ([<Project 
    heading="MH1 Tutors Platform"
    subheading="Entrepreneurial Project"
    src="images/projects/mh1-tutors.png"
    path="/mh1-tutors"
    />,
  <Project
    heading="This Website"
    subheading="Personal Project"
    src="images/projects/adelindiac-website.png"
    path="/adelindiac-website"
    style={{ boxShadow: "0 0 4px 1px rgba(255,255,255,0.5)" }}
  />,
  <Project
    heading="Wordle"
    subheading="College Assignment"
    src="images/projects/wordle.png"
    path="/wordle"
  />,
  <Project
    heading="Leaving Cert CAO Points Calculator"
    subheading="Personal Project"
    src="images/projects/cao-points-calculator.png"
    path="/cao-points-calculator"
  />,
  <Project
    heading="API Controlled AGV"
    subheading="College Assignment"
    src="images/projects/mobile-robotics.jpg"
    path="/mobile-robotics"
  />,
  <Project
    heading="PDF App"
    subheading="Personal Project"
    src="images/projects/pdf-app.png"
    path="/pdf-app"
  />,
  <Project
    heading="Arduino Contactless Roulette"
    subheading="Personal Project / College Assignment"
    src="images/projects/contactless-roulette2.png"
    path="/arduino-roulette"
  />,
  <Project
    heading="3rd Year College Electronics"
    subheading="College Assignment"
    src="images/projects/ee319-oscilloscope.png"
    path="/third-year-electronics"
  />,
  <Project
    heading="Fireman Robot"
    subheading="College Assignment"
    src="images/projects/fireman.jpg"
    path="/fireman"
  />,

  <Project
    heading="2nd Year College Electronics"
    subheading="College Assignment"
    src="images/projects/electronics-0-99-counter.jpg"
    path="/electronics"
  />,
]);
  }, []) 
    

  const [projectsToShowCount, setProjectsToShowCount] = useState(4);
  const [showButton, setShowButton] = useState(true);
  const [projectsToShow, setProjectsToShow] = useState([]);

  useEffect(() => {
    const slicedProjectsArray = PROJECTS.slice(0, projectsToShowCount);
    const temp = slicedProjectsArray.map((project, idx) => (
      <React.Fragment key={idx}>{project}</React.Fragment>
    ));
    setProjectsToShow(temp);
    if (projectsToShowCount > PROJECTS.length) {
      return setShowButton(false);
    }
  }, [projectsToShowCount, PROJECTS]);

  const handleShowMore = () => {
    setProjectsToShowCount(projectsToShowCount + 4);
  };

  return (
    <div id="projects" className="text-light container">
      <h2 className="fw-bold">Personal Projects</h2>
      <LineDivider />
      <div id="projectDiv" className="row">
        {window.innerWidth < 768
          ? projectsToShow || (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )
          : PROJECTS.map((project, idx) => (
              <React.Fragment key={idx}>{project}</React.Fragment>
            ))}
      </div>
      {window.innerWidth < 768 && showButton && (
        <Button variant="light" onClick={handleShowMore}>
          Show More Projects
        </Button>
      )}
    </div>
  );
};

export default ProjectsSection;
