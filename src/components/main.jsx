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
      <Spacer height="30px" />
      <ProjectsSection />
      <Spacer height="30px" />
      <MathsSection />
      <Spacer height="30px" />
      <About />
      <Spacer height="30px" />
      <ContactPage />
      <Spacer height="30px" />
    </>
  );
};

export default Main;
