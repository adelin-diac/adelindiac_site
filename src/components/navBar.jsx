import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const styles = {
    navbarNavStyle: {
      marginLeft: "auto",
    },
  };
  document.querySelectorAll("nav-link").forEach((l) => {
    l.addEventListener("click", () => {
      document.getElementById("navbarSupportedContent").to("aria-expanded");
    });
  });
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#161718" }}>
        <Link to="/" className="navbar-brand" href="#home">
          Adelin Diac
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" style={styles.navbarNavStyle}>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#maths" className="nav-link">
                MathsHelpIreland
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
