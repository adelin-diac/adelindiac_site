import React from "react";
import "../styles/careerBlock.css";

const CareerBlock = (props) => {
  const { year, heading, location, text, img, reverse, link, position } = props;
  const sectionHeight = "170px";

  const styles = {
    mainDiv: {
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row",
    },
    imgStyle: {
      height: sectionHeight,
    },
    imgDiv: {
      width: sectionHeight,
      height: sectionHeight,
    },
    infoDiv: {
      width: "60%",
      marginRight: "10px",
      marginLeft: "10px",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
    },
  };

  const pressed = () => {
    let fadeTarget = document.getElementById("career-info-" + position);
    let opacity = 1;
    var fadeEffect = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        fadeTarget.style.opacity = opacity;
      } else {
        fadeTarget.style.display = "none";
        fadeTarget.style.opacity = 1;
        document.getElementById("career-text-" + position).style.display =
          "block";
        clearInterval(fadeEffect);
      }
    }, 20);
  };
  const unPressed = () => {
    let fadeTarget = document.getElementById("career-text-" + position);
    let opacity = 1;
    var fadeEffect = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        fadeTarget.style.opacity = opacity;
      } else {
        fadeTarget.style.display = "none";
        fadeTarget.style.opacity = 1;
        document.getElementById("career-info-" + position).style.display =
          "block";
        clearInterval(fadeEffect);
      }
    }, 20);
  };
  return (
    <div className="career-block" style={styles.mainDiv}>
      <div className="career-image" style={styles.imgDiv}>
        <a href={"https://" + link} target="_blank" rel="noreferrer">
          <img src={img} style={styles.imgStyle} alt={location}></img>
        </a>
      </div>
      <div className="career-info-block" style={styles.infoDiv}>
        <div
          className="career-info"
          id={"career-info-" + position}
          onClick={() => pressed()}>
          <h5 style={{ fontStyle: "italic", color: "#a5b1bc" }}>{year}</h5>
          <h5>{heading}</h5>
          <p>{location}</p>
          <p style={{ fontSize: "14px", color: "grey" }}>
            Press to see more...
          </p>
        </div>
        <div
          className="career-text"
          id={"career-text-" + position}
          style={{ display: "none" }}
          onClick={() => unPressed()}>
          <p style={{ fontSize: "16px", color: "#c8cdd5" }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CareerBlock;
