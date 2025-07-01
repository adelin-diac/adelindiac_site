import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div id="socials" style={{ borderBottom: "1px solid grey" }}>
          <a
            href="https://www.github.com/adelin-diac"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-2 mx-2">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adelin-denis-diac/"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-2 mx-2">
            <AiFillLinkedin />
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

export default Footer;
