import React from "react";

const NavBar = () => {
  const styles = {
    navbarNavStyle: {
      marginLeft: "auto",
    },
  };
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#161718" }}
      >
        <a className="navbar-brand" href="#home">
          Adelin Diac
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" style={styles.navbarNavStyle}>
            <li className="nav-item ">
              <a href="#home" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                MathsHelpIreland
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
