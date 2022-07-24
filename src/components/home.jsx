import React, { Component } from "react";
import "./styles/home.css";

class HomeSection extends Component {
  render() {
    const homeImgStyle = {
      width: "70%",
    };
    const socialLinksStyle = {
      width: "10%",
      display: "flex",
      flexDirection: "column",
    };
    return (
      <div id="home" className="float-container">
        <div id="social-links" style={socialLinksStyle}>
          <a>Github</a>
          <a>LinkedIn</a>
          <a>Email</a>
          <a>Instagram MHI</a>
          <a>MHI Website</a>
        </div>
        <div id="homeImageDiv" className="float-child">
          <img
            id="home-img"
            style={homeImgStyle}
            src="./images/adelindiac-img.png"
            alt="Adelin Diac Profile Picture"
          ></img>
        </div>
        <div id="home-content" className="float-child">
          <h3 className="dark">Adelin Diac</h3>
          <p>Hello</p>
          <p className="lead">Hello</p>
        </div>
      </div>
    );
  }
}

export default HomeSection;
