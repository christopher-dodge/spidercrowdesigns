import React, { Fragment } from 'react';
import Slider from './Components/Slider.js';
import TopNav from './Components/TopNav.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Fragment>
        <Slider />
      </Fragment>
    </div>
  );
}

export default App;
