import React, { Component } from 'react';
import Clock from '../Clock';
import { Badge } from 'react-bootstrap';

class IntroductionSec extends Component {
  render() {
    return (
      <div className="intro">
        <Clock />
        <div className="title">

          <h1 style={{ color: 'wheat', textAlign: "left", marginTop: '2vw' }}>
            Owen Wenhao Geng
            <span role="img" aria-label="climbing">  🧗🏽‍♂️ </span>
          </h1>

          <h3 style={{ color: 'white', textAlign: "left" }}>
            Front-end/Mobile/Java Developer  |  Computer Engineering Student  |  Table Tennis Player
          </h3>

          <h4 style={{ color: 'white', textAlign: "left", marginTop: '3.5vw' }}>
            Experienced with Java, frontend and mobile development. Recently focusing on building web apps with React.
          </h4>

          <h4 style={{ color: 'white', textAlign: "left" }}>
            I work with:
            <Badge pill variant="primary" style={{ marginLeft: '1vw' }}>
              Java
            </Badge>
            <Badge pill variant="secondary" style={{ marginLeft: '1vw' }}>
              Javascript
            </Badge>
            <Badge pill variant="success" style={{ marginLeft: '1vw' }}>
              C#
            </Badge>
            <Badge pill variant="danger" style={{ marginLeft: '1vw' }}>
              XAML
            </Badge>
            <Badge pill variant="info" style={{ marginLeft: '1vw' }}>
              React
            </Badge>
            <Badge pill variant="light" style={{ marginLeft: '1vw' }}>
              Redux
            </Badge>
          </h4>

          <h4 style={{ color: 'white', textAlign: "left", marginTop: '3.5vw' }}>
            {"Expected graduation in December 2020 | "}
            <a href="https://drive.google.com/open?id=1dG0Q7nu9Z0MBPTEQ05g2mgEMhvRKMzM7" target="_blank" rel="noopener noreferrer">View my resume</a>
          </h4>
        </div>
      </div>
    )
  }
}

export default IntroductionSec;
