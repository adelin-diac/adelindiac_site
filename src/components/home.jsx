import React from "react";
import "../styles/home.css";

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
            style={styles.socialImgStyles}>
            <img
              alt="GitHub Logo"
              src="./images/github.png"
              style={styles.socialImgStyles}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/adelin-denis-diac/"
            target="_blank"
            rel="noreferrer"
            style={styles.socialImgStyles}>
            <img
              alt="LinkedIn Logo"
              src="./images/linkedin.png"
              style={styles.socialImgStyles}></img>
          </a>
          <a href="#" style={styles.socialImgStyles}>
            <img
              alt="Email Logo"
              src="./images/email.png"
              style={styles.socialImgStyles}></img>
          </a>
        </div>
        <div
          id="homeImageDiv"
          className="float-child"
          style={styles.homeImageDivStyle}>
          <img
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
        <p style={{ fontWeight: "bold" }}>
          Software Engineer<span className="divider"></span>Entrepreneur
          <span className="divider"></span>Mechatronics Student
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
    // height: "270px",
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
  socialImgStyles: {
    width: "30px",
    height: "30px",
    margin: "0 auto",
    marginBottom: "10px",
  },
  homeContentStyle: {
    width: "90%",
    marginTop: "70px",
    textAlign: "center",
    marginRight: "50px",
  },
};

//THIS IS THE INSTAGRAM IMAGE WITH LINK TO MHI INSTA
{
  /* <a
href="https://www.instagram.com/mathshelp_ireland"
target="_blank"
style={socialImgStyles}
>
<img
	alt="Instagram Logo"
	src="./images/instagram.png"
	style={socialImgStyles}
></img>
</a> */
}
export default HomeSection;
