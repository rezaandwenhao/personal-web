import React, { Component } from 'react';
import GarbageLookup from '../resources/Garbage Lookup.gif';
import Nventive from '../resources/Nventive.jpg';
import MathUp from '../resources/MATH-UP.png';
import Robot from '../resources/Robot.png';
import Ericsson from '../resources/Ericsson.jpg';
import TileO from '../resources/TileO.png';
import Footer from './Footer';

class ProjectsSec extends Component {
  render() {
    return (
      <div className="projects">
        <div id="project">
          <div id="aProject">
            <a href="https://hidden-plateau-61052.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className="photo" src={GarbageLookup} alt="" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2019
            </p>
            <a href="https://hidden-plateau-61052.herokuapp.com/" target="_blank" rel="noopener noreferrer">Website</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/rezaandwenhao/Gabage-Lookup-React" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <img className="photo" src={Nventive} alt="" />
            <p style={{ color: 'white', paddingTop: 10 }}>
              Nventive Internship  |  2019
            </p>
            <p style={{ color: 'white' }}>Coming Soon!</p>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a href="https://github.com/rezaandwenhao/MATH-UP" target="_blank" rel="noopener noreferrer">
              <img className="photo" src={MathUp} alt="" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2018
            </p>
            <a href="https://github.com/rezaandwenhao/MATH-UP" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og" target="_blank" rel="noopener noreferrer">
              <img className="photo" src={Robot} alt=""/>
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2018
            </p>
            <a href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og" target="_blank" rel="noopener noreferrer">Demo</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/rezaandwenhao/DPM-Robot-Competition" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <img className="photo" src={Ericsson} alt="" />
            <p style={{ color: 'white', paddingTop: 10 }}>
              Ericsson Internship  |  2018
            </p>
            <p style={{ color: 'white' }}>Coming Soon!</p>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a href="https://github.com/rezaandwenhao/TileO" target="_blank" rel="noopener noreferrer">
              <img className="photo" src={TileO} alt="" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2017
            </p>
            <a href="https://github.com/rezaandwenhao/TileO" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProjectsSec;