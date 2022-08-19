import React from "react";
import HomeSection from "./home.jsx";
import ProjectsSection from "./projectsSection";
import MathsSection from "./mathsSection";
import ContactPage from "./contactPage";
import About from "./about";

import Spacer from "./spacer";

const Main = () => {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <Spacer height="60px" />
      <MathsSection />
      <Spacer height="60px" />
      <About />
      <Spacer height="60px" />
      <ContactPage />
      <Spacer height="60px" />
    </>
  );
};

export default Main;
