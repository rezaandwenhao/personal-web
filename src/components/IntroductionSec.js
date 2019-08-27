import React, { Component } from 'react';
import Clock from '../Clock';
import { Badge } from 'react-bootstrap';

class IntroductionSec extends Component {
  render() {
    return (
      <div className="intro">
        <Clock />
        <div className="title">

          <h1 style={{ color: 'wheat', textAlign: "left" }}>
            I am Wenhao Geng, a software engineer driven by curiosity and self-discipline
          <span role="img" aria-label="climbing">  🧗🏽‍♂️ </span>
          </h1>

          <h3 style={{ color: 'white', textAlign: "left" }}>
            Front-end/Mobile/Java Developer  |  Computer Engineering Student  |  Table Tennis Player
          </h3>

          <h4 style={{ color: 'white', textAlign: "left" }}>
            I have the most experience in Java system design, front-end development, and mobile development. My recent interest is focusing on the React web app.
          </h4>

          <h4 style={{ color: 'white', textAlign: "left" }}>
            I work with:
            <Badge pill variant="primary">
              Java
            </Badge>
            <Badge pill variant="secondary">
              Javascript
            </Badge>
            <Badge pill variant="success">
              C#
            </Badge>
            <Badge pill variant="danger">
              XAML
            </Badge>
            <Badge pill variant="info">
              React
            </Badge>
            <Badge pill variant="light">
              Redux
            </Badge>
          </h4>

          <h4 style={{ color: 'white', textAlign: "left" }}>
            {"Expected graduation in December 2020 | "}
            <a href="https://drive.google.com/open?id=18Yuo8NgnHePld0zkVvLGre6xwUzC0rRK">View my resume</a>
          </h4>
        </div>
      </div>
    )
  }
}

export default IntroductionSec;
