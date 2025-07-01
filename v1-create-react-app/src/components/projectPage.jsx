import React, { useState, useEffect } from "react";
import LineDivider from "./lineDivider";
import Spacer from "./spacer";
import "../styles/projectPage.css";
import { getFiles } from "../requests/getAssetsFromStorage";
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ProjectPage = (props) => {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [assets, setAssets] = useState([]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const readData = async () => {
      const data = await getFiles(props.storageFolderName);
      setAssets(data);
    };
    readData().then(() => setDataIsLoaded(true));
  }, [props.storageFolderName]);
  return (
    <div className="text-light">
      <Spacer height="30px" />
      <div className="titles">
        <h1 className="title">{props.title}</h1>
        <LineDivider mB="20px" />
        <h6 className="subheading">{props.subheading}</h6>
        <Spacer height="40px" />
      </div>
      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <div className="img-vids">
          <img
            src={props.mainImage}
            alt={props.title + " image will be here"}
            className="image"></img>
          <Spacer height="20px" />
          {dataIsLoaded ? <>{assets}</> : <Spinner animation="border" className="mx-auto my-5" />}
          <Spacer height="20px" />
        </div>
        <div>
          <div style={{ position: "sticky", top: 20 }}>
            <p style={{ fontSize: "16px" }} className="mx-3">
              Tech/Tools/Languages:{" "}
              <span
                style={{
                  color: "rgba(255, 255, 255 , 0.6",
                  fontWeight: "bold",
                }}>
                {props.tools}
              </span>
              <br></br>Date Completed:{" "}
              <span
                style={{
                  color: "rgba(255, 255, 255 , 0.6",
                  fontWeight: "bold",
                }}>
                {props.date}
              </span>
            </p>
            <Spacer height="20px" />
            <div
              style={{
                color: "rgba(255,255,255,0.85)",
                textAlign: "justify",
                marginRight: "70px",
                marginLeft: "70px",
              }}
              className="body-text">
              {props.body}
            </div>
            <Spacer height="30px" />
            {props.githubLink ? (
              <a
                style={{ fontSize: "14px", color: "rgb(170, 180, 255)" }}
                href={props.githubLink}
                target="_blank"
                rel="noreferrer">
                GitHub link to project
              </a>
            ) : (
              <div
                style={{
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "rgb(140, 200, 200)",
                }}>
                The GitHub repo for this project{" "}
                {props.private ? "is private." : "doesn't exist."}
              </div>
            )}
            <Spacer height="30px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
