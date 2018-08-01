import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';

// pages
import Home from './pages/home';
import About from './pages/about';
import Program from './pages/program';
import Register from './pages/sign_up';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="main_menu">
          <a className="fltLft" href="#Home">CHURCH OF CHRIST</a>
          <div className="fltRght">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Program">Program</a>
            <a href="#Register">Register</a>
          </div>
        </div>

        <ScrollableAnchor id={'Home'}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={'About'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Program'}>
          <Program />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Register'}>
          <Register />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
