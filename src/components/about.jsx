import React from "react";
import LineDivider from "./lineDivider";

const About = () => {
  return (
    <div id="about" className="text-light container">
      <h2>About</h2>
      <LineDivider />
      <div>
        Journey so far will be here, with expandable tiles for each main section
        (click on image to view more etc.)<br></br>
        <br></br> On web: have it centered and it appears to the right, while
        image slides left <br></br>
        <br></br> on mobile: have it expand below image
      </div>
    </div>
  );
};

export default About;
