import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div id="socials">
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
        </div>
        <div id="footer-info" className="text-center text-light p-3 bg-dark">
          adelin334@gmail.com
        </div>
        <div id="copyright" className="text-center text-light p-3 bg-dark">
          © 2022 Copyright: Adelin Diac
        </div>
      </div>
    </footer>
  );
};

const styles = {
  socials: {
    borderBottom: "1px solid grey",
  },
  socialImgStyles: {
    width: "30px",
    height: "30px",
    margin: "10px",
    marginBottom: "10px",
  },
};

export default Footer;
