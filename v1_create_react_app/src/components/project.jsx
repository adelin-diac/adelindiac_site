import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Project = (props) => {
  const [loaded, setLoaded] = useState(false);
  const styles = {
    projectStyle: {},
  };
  if (props.style) {
    styles.projectStyle = props.style;
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 container">
      <div className="portfolio-item container">
        <Link to={props.path}>
          <div style={styles.projectStyle}>
            <img
            onLoad={() => setLoaded(true)}
              style={{ width: "100%" }}
              src={props.src}
              className="img-fluid project-img"
              alt={props.heading}></img>
              {!loaded && <Spinner animation="border" className="mx-auto" />}
          </div>
        </Link>
        <div className="portfolio-caption-heading">{props.heading}</div>
        <p className="portfolio-caption-subheading">{props.subheading}</p>
      </div>
    </div>
  );
};
export default Project;
