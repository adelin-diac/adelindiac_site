import React, { Component } from "react";

class HomeSection extends Component {
  render() {
    return (
      <div id="home" className="float-container" style={floatContainerStyle}>
        <div id="social-links" style={socialLinksStyle}>
          <a
            href="https://www.github.com/adelin-diac"
            target="_blank"
            style={socialImgStyles}
          >
            <img
              alt="GitHub Logo"
              src="./images/github.png"
              style={socialImgStyles}
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/adelin-denis-diac/"
            target="_blank"
            style={socialImgStyles}
          >
            <img
              alt="LinkedIn Logo"
              src="./images/linkedin.png"
              style={socialImgStyles}
            ></img>
          </a>
          <a href="" style={socialImgStyles}>
            <img
              alt="Email Logo"
              src="./images/email.png"
              style={socialImgStyles}
            ></img>
          </a>
        </div>
        <div
          id="homeImageDiv"
          className="float-child"
          style={homeImageDivStyle}
        >
          <img
            id="home-img"
            style={homeImgStyle}
            src="./images/adelindiac-img.png"
            alt="Adelin Diac Profile Picture"
          ></img>
        </div>
        <div id="home-content" className="float-child" style={homeContentStyle}>
          <h3 className="dark">Adelin Diac</h3>
          <p>Hello</p>
          <p className="lead">
            Have a section on Mathshelp ireland and link info about it there
            Make the email link to a "contact" section that emails you
          </p>
        </div>
      </div>
    );
  }
}
const floatContainerStyle = {
  padding: "10px",
  color: "white",
  display: "flex",
  flexDirection: "row",
  height: "270px",
};
const homeImageDivStyle = {
  width: "40%",
};
const homeImgStyle = {
  width: "250px",
};
const socialLinksStyle = {
  marginTop: "65px",
  width: "10%",
  display: "flex",
  flexDirection: "column",
};
const socialImgStyles = {
  width: "30px",
  height: "30px",
  margin: "0 auto",
  marginBottom: "10px",
};
const homeContentStyle = {
  width: "50%",
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
