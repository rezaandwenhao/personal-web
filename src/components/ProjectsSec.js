import React, { Component } from 'react';
import GarbageLookup from '../resources/Garbage Lookup.gif';
import Nventive from '../resources/Nventive.jpg';
import MathUp from '../resources/MATH-UP.png';
import Robot from '../resources/Robot.png';
import Ericsson from '../resources/Ericsson.jpg';
import TileO from '../resources/TileO.png';

class ProjectsSec extends Component {
  render() {
    return (
      <div className="projects">
        <div id="project">
          <div id="aProject">
            < a href="https://hidden-plateau-61052.herokuapp.com/">
              <img className="photo" src={GarbageLookup} alt="" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2019
            </p>
            <a href="https://hidden-plateau-61052.herokuapp.com/">Website</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/rezaandwenhao/Gabage-Lookup-React">Github</a>
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
            <a href="https://github.com/rezaandwenhao/MATH-UP">
              <img className="photo" src={MathUp} alt="" href="https://github.com/rezaandwenhao/MATH-UP" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2018
            </p>
            <a href="https://github.com/rezaandwenhao/MATH-UP">Github</a>
          </div>
        </div>
        <div id="project">
          <div id="aProject">
            <a href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og">
              <img className="photo" src={Robot} alt="" href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2018
            </p>
            <a href="https://drive.google.com/open?id=1nxU33NAUv72MRqcaAAUUgR7n6xqlB8Og">Demo</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/rezaandwenhao/DPM-Robot-Competition">Github</a>
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
            <a href="https://github.com/rezaandwenhao/TileO">
              <img className="photo" src={TileO} alt="" />
            </a>
            <p style={{ color: 'white', paddingTop: 10 }}>
              Project  |  2017
            </p>
            <a href="https://github.com/rezaandwenhao/TileO">Github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsSec;