import React from "react";
import "../styles/home.css";
import { HashLink as Link } from "react-router-hash-link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="float-container"
      style={styles.floatContainerStyle}>
      <div id="row" style={styles.rowDivStyle}>
        <div id="social-links" style={styles.socialLinksStyle}>
          <a
            href="https://www.github.com/adelin-diac"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-2 home-image">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adelin-denis-diac/"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-2 home-image">
            <AiFillLinkedin />
          </a>
          <Link to="/#contact" className="text-light fs-3 home-image">
            <AiOutlineMail />
          </Link>
        </div>
        <div
          id="homeImageDiv"
          className="float-child"
          style={styles.homeImageDivStyle}>
          <img
            className="home-image"
            id="home-img"
            style={styles.homeImgStyle}
            src="./images/adelindiac-img.png"
            alt="Adelin Diac"></img>
        </div>
      </div>
      <div
        id="home-content"
        className="float-child"
        style={styles.homeContentStyle}>
        <h1 style={{ marginBottom: "10px" }}>Adelin Diac</h1>
        <div
          id="line"
          style={{
            height: "2px",
            border: "1px solid white",
            width: "70%",
            margin: "0 auto",
            marginBottom: "10px",
          }}></div>
        <p>
          {/* Work in Progress */}
          Software Engineer
          {/* <span className="divider"></span>Entrepreneur */}
          {/* <span className="divider"></span>Mechatronics Student */}
        </p>
      </div>
    </div>
  );
};
const styles = {
  floatContainerStyle: {
    padding: "10px",
    color: "white",
    display: "flex",
    flexDirection: "row",
    paddingTop: "20vh",
  },
  rowDivStyle: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  socialLinksStyle: {
    marginTop: "65px",
    width: "20%",
    display: "flex",
    flexDirection: "column",
  },
  homeImageDivStyle: {
    width: "80%",
  },
  homeImgStyle: {
    width: "300px",
  },
  homeContentStyle: {
    width: "90%",
    marginTop: "70px",
    textAlign: "center",
    marginRight: "50px",
  },
};

export default HomeSection;
