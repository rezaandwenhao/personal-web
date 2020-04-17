import React, { Component } from "react";
import Clock from "../Clock";
import { Badge } from "react-bootstrap";

class IntroductionSec extends Component {
  render() {
    return (
      <div className="intro">
        <Clock />
        <div className="title">
          <h1 style={{ color: "wheat", textAlign: "left", marginTop: "2vw" }}>
            Owen (Wenhao) Geng
          </h1>

          <h3 style={{ color: "white", textAlign: "left" }}>
            Software Developer | Computer Engineering Student | Table Tennis
            Player
          </h3>

          <h4 style={{ color: "white", textAlign: "left", marginTop: "3.5vw" }}>
            Experienced with Java, full-stack web development and mobile
            development. Open for software engineer internship opportunities.
          </h4>

          <h4 style={{ color: "white", textAlign: "left" }}>
            I work with:
            <Badge pill variant="primary" style={{ marginLeft: "1vw" }}>
              Java
            </Badge>
            <Badge pill variant="secondary" style={{ marginLeft: "1vw" }}>
              Javascript
            </Badge>
            <Badge pill variant="success" style={{ marginLeft: "1vw" }}>
              Node.js
            </Badge>
            <Badge pill variant="info" style={{ marginLeft: "1vw" }}>
              React.js
            </Badge>
            <Badge pill variant="light" style={{ marginLeft: "1vw" }}>
              Redux
            </Badge>
            <Badge pill variant="danger" style={{ marginLeft: "1vw" }}>
              Vue.js
            </Badge>
            <Badge pill variant="warning" style={{ marginLeft: "1vw" }}>
              Spring Framework
            </Badge>
            <Badge pill variant="primary" style={{ marginLeft: "1vw" }}>
              MongoDB
            </Badge>
          </h4>

          <h4 style={{ color: "white", textAlign: "left", marginTop: "3.5vw" }}>
            {"Expected graduation from McGill University in December 2020 | "}
            <a
              href="https://drive.google.com/open?id=108xPMDFBOOFovsR9bb_J6WThWDHKDqEY"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default IntroductionSec;
