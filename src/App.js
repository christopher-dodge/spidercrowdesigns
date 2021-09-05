import React, { Fragment } from 'react';
import Slider from './Components/Slider.js';
import TopNav from './Components/TopNav.js';
import './App.css';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Donate from './Components/Donate.js';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Fragment>
        <Slider />
      </Fragment>
      <About />
      <Contact />
    </div>
  );
}

export default App;
