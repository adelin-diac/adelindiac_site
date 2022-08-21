import React from "react";

const LineDivider = (props) => {
  return (
    <div
      style={{
        height: "2px",
        border: "1px solid rgba(255,255,255,0.6)",
        width: "70%",
        margin: "0 auto",
        marginBottom: props.mB ? props.mB : "50px",
      }}></div>
  );
};

export default LineDivider;
