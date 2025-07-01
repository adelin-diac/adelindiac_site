import React from "react";
import LineDivider from "./lineDivider";
import CareerBlock from "./careerBlock";
import Arrow from "./arrow";
import { useState } from "react";
import "../styles/about.css";

const About = () => {
  const [direction, setDirection] = useState("descending");

  const toggleDirection = (e) => {
    let buttonPressed = e.target.textContent;
    if (e.target.classList.contains("active")) {
      return;
    } else {
      if (buttonPressed === "Descending") {
        e.target.nextSibling.classList.remove("active");
        setDirection("descending");
      } else {
        let descendingBtn = document.getElementsByClassName("tgl-left");
        descendingBtn[0].classList.remove("active");
        setDirection("ascending");
      }
      e.target.classList.add("active");
    }
  };
  const arrowReversed = direction === "ascending" ? true : false;
  return (
    <div id="about" className="text-light container">
      <h2 className="fw-bold">About</h2>
      <LineDivider />
      Will update my this eventually 😂. I currently work as an SRE at Susquehanna International Group.
          See more of my experience on <a href="https://www.linkedin.com/in/adelin-denis-diac/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        
      {/* <div
        style={{
          marginBottom: "50px",
        }}>
        <label
          className="my-toggle tgl-left active"
          onClick={(e) => toggleDirection(e)}>
          Descending
        </label>
        <label
          className="my-toggle tgl-right"
          onClick={(e) => toggleDirection(e)}>
          Ascending
        </label>
      </div>
      <div
        id="career-elements"
        style={{
          display: "flex",
          flexDirection:
            direction === "ascending" ? "column-reverse" : "column",
        }}>           <CareerBlock
          year="2022-Present"
          heading="Junior Software Engineer"
          location="Hereworks"
          text="In June 2022, I began an Internship at Hereworks as a Junior Software Engineer. During this Internship, I worked on a Frontend Development using Javascript and ReactJS. I also learned how to work with API's as well as learning some basic Networking skills and the different protocols used in the industry. I also worked as part of the MSI team, where I used Python to automate the onboarding of Building Devices to the cloud. After the Internship I worked part-time, before returning back for another full-time internship in March 2023. During this internship, I was mostly working on the MSI team, again using Python to write scripts, but also learning to use Linux commands. Some of the other work inlcuded Data Analytics where we would use Python and OpenSearch to analyse data from clients to automatically alert them about anomalies."
          img="images/hw-logo.jpg"
          reverse={arrowReversed}
          link="www.hereworks.ie"
          position={0}
        />
        <Arrow reverse={arrowReversed} />
        <CareerBlock
          year="2020-Present"
          heading="Founder"
          location="MH1 Tutors"
          text="In October 2020, I began offering tutoring classes in maths for Junior Cert and Leaving Cert students. It began as an Instagram page (@mathshelp_ireland, now @mh1_tutors) but can now be found at www.mh1-tutors.com. During this time I have learned a lot about the skills necessary to run a business, along side the communication skills needed to help young students understand complex mathematical problems. The platform now aims to connect students and tutors. I was heavily involved in all stages of building the platform, from the initial idea, to the design and development of the website. The entire concept of MH1 Tutors (which started off as Maths Help Ireland) has helped me enormously, not only in learning necessary skills to run a business, but also many technical skills required to build a software platform. You can read more about the platform from the projects section above."
          img="images/mhi-logo.png"
          reverse={!arrowReversed}
          link="www.mh1-tutors.com"
          position={1}
        />
        <Arrow reverse={arrowReversed} />
        <CareerBlock
          year="2020-2024"
          heading="B.Eng Mechatronic Engineering"
          location="Dublin City University"
          text="Currently going into my 4th Year of a B.Eng in Mechatronics Engineering in DCU. Some of the modules completed up to now include Software Development for Engineers, Object Oriented Programming, Embedded Systems, Digital and Analogue Electronics, Electromechanical Systems, Mobile Robotics and Data Analytics for Engineers. These modules have allowed me to become comfortable using software alongside mechanical and electronic hardware."
          img="images/dcu.jpg"
          reverse={arrowReversed}
          link="www.dcu.ie"
          position={2}
        /> 
      </div> */}
    </div>
  );
};

export default About;
