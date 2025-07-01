import React from "react";
import "../styles/arrow.css";

const Arrow = (props) => {
  const reverse = props.reverse;
  const styles = {
    mainDiv: {
      transition: "0.5s",
      width: "100%",
      height: "150px",
      marginTop: "50px",
      marginBottom: "50px",
      transform: reverse ? "scale(-1)" : "scale(1)",
    },
  };
  return (
    <div style={styles.mainDiv}>
      <img
        className="arrow-img"
        src="images/arrow.png"
        alt="arrow"
        style={{ height: "150px" }}></img>
    </div>
  );
};

export default Arrow;
