import React, { Component } from "react";
import GarbageLookup from "../resources/Garbage Lookup.gif";
import Nventive from "../resources/Nventive.jpg";
import MathUp from "../resources/MATH-UP.png";
import Robot from "../resources/Robot.png";
import Ericsson from "../resources/Ericsson.jpg";
import TileO from "../resources/TileO.png";
import Apple from "../resources/Apple-logo.png";
import Nimbus from "../resources/Nimbus.png";
import Footer from "./Footer";

class ProjectsSec extends Component {
  render() {
    return (
      <div className="projects">
        <div id="project">
          <div id="aProject">
            <a
              href="https://www.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Apple} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>
              Apple SWE Internship | 2020
            </p>
            <p style={{ color: "white" }}>Cupertino, California</p>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://nimbuslearning.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Nimbus} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>
              Nimbus Learning SWE Contractor | 2020
            </p>
            <p style={{ color: "white" }}>Montreal, Canada</p>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://hidden-plateau-61052.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={GarbageLookup} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>Waste Lookup | 2019</p>
            <a
              href="https://hidden-plateau-61052.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              href="https://github.com/rezaandwenhao/Gabage-Lookup-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://nventive.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Nventive} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>
              Nventive SWE Internship | 2019
            </p>
            <p style={{ color: "white" }}>Montreal, Canada</p>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://github.com/rezaandwenhao/MATH-UP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={MathUp} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>MathUp | 2018</p>
            <a
              href="https://github.com/rezaandwenhao/MATH-UP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Robot} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>LEGO EV3 Robot Competition | 2018</p>
            <a
              href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              href="https://github.com/rezaandwenhao/DPM-Robot-Competition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://www.ericsson.ca/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Ericsson} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>
              Ericsson SWE Internship | 2018
            </p>
            <p style={{ color: "white" }}>Ottawa, Canada</p>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a
              href="https://github.com/rezaandwenhao/TileO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={TileO} alt="" />
            </a>
            <p style={{ color: "white", paddingTop: 10 }}>TileO | 2017</p>
            <a
              href="https://github.com/rezaandwenhao/TileO"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectsSec;
