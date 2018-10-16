import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
// pages
import Home from './pages/home';
import About from './pages/about';
import Program from './pages/program';
import Register from './pages/sign_up';
import Footer from './pages/footer';


class App extends Component {
  render() {
    
    return (
      <div className="App">
          <StickyHeader
            // This is the sticky part of the header.
            header={
              <div class="main_menu">
                <a className="fltLft" href="#Home">CHURCH OF CHRIST</a>
                <div className="fltRght">
                  <a href="#Home">Home</a>
                  <a href="#About">About</a>
                  <a href="#Program">Program</a>
                  <a href="#Register">Register</a>
                  <a href="#Footer">Footer</a>
                </div>
              </div>
            }
          >
            <section>
            <ScrollableAnchor id={'Home'}>
                  <Home />
                </ScrollableAnchor>
            </section>
          </StickyHeader>

        <ScrollableAnchor id={'About'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Program'}>
          <Program />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Register'}>
          <Register />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Footer'}>
          <Footer />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
