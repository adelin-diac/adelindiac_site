import React from "react";

const LineDivider = (props) => {
  return (
    <div
      style={{
        height: "2px",
        border: "1px solid white",
        width: "70%",
        margin: "0 auto",
        marginBottom: props.mB ? props.mB : "50px",
      }}></div>
  );
};

export default LineDivider;
