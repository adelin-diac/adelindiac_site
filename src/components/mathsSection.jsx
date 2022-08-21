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
      width: windowWidth > 1000 ? "300px" : "50%",
      marginRight: "40px",
      marginLeft: "40px",
    },
    textDiv: {
      width: "100%",
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
      <LineDivider mB={windowWidth > 850 ? null : "20px"} />
      <div
        className="maths-content"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "0 auto",
        }}>
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
          Maths Help Ireland is an online tutoring service founded by me in
          October 2020.
          <br></br>
          <br></br>
          It provides 1-on-1 classes for Junior Cert, Leaving Cert and College
          students, as well as other study/maths resources.
          <br></br>
          <br></br>
          The main focus is on maths, however classes are also available in
          other subjects, depending on the tutor chosen.
          <br></br>
          <br></br>
          To find out more, or if you would like to book a class, click on the
          links below.
          <br></br>
          <br></br>
          <div
            className="maths-links"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}>
            <a
              className="btn btn-secondary mx-2 my-2 my-2"
              href="https://www.mathshelpireland.com"
              target="_blank"
              rel="noreferrer">
              Website
            </a>
            <a
              className="btn btn-danger mx-2 my-2"
              href="https://www.instagram.com/mathshelp_ireland"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
            <a
              className="btn btn-primary mx-2 my-2"
              href="https://www.facebook.com/mathshelp.ireland"
              target="_blank"
              rel="noreferrer">
              Facebook
            </a>
            <a
              className="btn btn-dark mx-2 my-2"
              href="https://www.tiktok.com/@mathshelp_ireland"
              target="_blank"
              rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsSection;
