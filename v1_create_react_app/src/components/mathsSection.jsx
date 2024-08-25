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
      <h2 className="fw-bold">MH1 Tutors</h2>
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
            href="https://www.mh1-tutors.com"
            target="_blank"
            rel="noreferrer">
            <img
              alt="MH1 Tutors"
              src="images/mhi-logo.png"
              style={styles.image}></img>
          </a>
        </div>
        <div style={styles.textDiv} className="text-div container">
          MH1 Tutors is an online platform that connects students with
          experienced tutors in various subjects.
          <br />
          <br /> It began as a one-person operation where I was teaching Leaving
          Cert students Maths over Zoom; it is now expanding to provide an
          extensive repository of tutors for students and parents.
          <br />
          <br /> Our mission is to make high-quality tutoring accessible to
          everyone by allowing tutors to advertise their services freely and
          connecting them with students who are searching for private tutors.
          <br />
          <br />
          <div
            className="maths-links"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}>
            <a
              className="btn btn-secondary mx-2 my-2 my-2"
              href="https://www.mh1-tutors.com"
              target="_blank"
              rel="noreferrer">
              Website
            </a>
            <a
              className="btn btn-danger mx-2 my-2"
              href="https://www.instagram.com/mh1_tutors"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
            <a
              className="btn btn-primary mx-2 my-2"
              href="https://www.facebook.com/mh1.tutors"
              target="_blank"
              rel="noreferrer">
              Facebook
            </a>
            <a
              className="btn btn-dark mx-2 my-2"
              href="https://www.tiktok.com/@mh1_tutors"
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
