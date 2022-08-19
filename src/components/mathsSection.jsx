import React from "react";
import LineDivider from "./lineDivider";
import "../styles/mathsSection.css";
import { useState } from "react";
import { useEffect } from "react";

const MathsSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const styles = {
    mathsImageDiv: {
      width: windowWidth > 850 ? "300px" : "50%",
      marginRight: "40px",
      marginLeft: "80px",
    },
    textDiv: {
      width: "100%",
      marginRight: "80px",
      marginLeft: "40px",
      textAlign: "justify",
    },
    image: {
      width: "100%",
      boxShadow: "0 0px 5px 1px rgba(255, 255, 255, 0.5)",
      borderRadius: "10px",
    },
  };
  return (
    <div id="maths" className="text-light container">
      <h2>Maths Help Ireland</h2>
      <LineDivider mB={windowWidth > 1000 ? null : "20px"} />
      <div
        className="maths-content"
        style={{ display: "flex", flexDirection: "row" }}>
        <div style={styles.mathsImageDiv} className="mhi-image">
          <a
            href="https://www.mathshelpireland.com"
            target="_blank"
            rel="noreferrer">
            <img
              alt="Maths Help Ireland"
              src="images/mhi-logo.png"
              style={styles.image}></img>
          </a>
        </div>
        <div style={styles.textDiv} className="text-div container">
          Talk about Maths Help Ireland here<br></br>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>{" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          <br></br>
          <br></br>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
      </div>
    </div>
  );
};

export default MathsSection;
