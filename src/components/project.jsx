import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4 container">
      <div className="portfolio-item">
        <Link to={props.path}>
          <div>
            <img
              src={props.src}
              className="img-fluid project-img"
              alt={props.heading}></img>
          </div>
        </Link>
        <div className="portfolio-caption-heading">{props.heading}</div>
        <p className="portfolio-caption-subheading">{props.subheading}</p>
      </div>
    </div>
  );
};
export default Project;
