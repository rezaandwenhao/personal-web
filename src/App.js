import React from 'react';
import './App.css';
import ProjectsSec from './components/ProjectsSec';
import IntroductionSec from './components/IntroductionSec';
//import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <IntroductionSec />
      <ProjectsSec />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
