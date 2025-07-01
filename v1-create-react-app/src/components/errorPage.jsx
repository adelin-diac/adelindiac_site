import React from "react";
import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <h3
        style={{ marginTop: "-200px", wordSpacing: "0.3rem" }}
        className="text-light">
        ERROR 404 - Page '{useLocation().pathname}' not found
      </h3>
      <br></br>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default ErrorPage;
