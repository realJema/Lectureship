import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="main2h bg_grey">
          <footer>
            <div className="btm_links">
              <div className="btm">
                <ul className="link_1" >
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Program">Program</a></li>
                  <li><a href="#Register">Sign Up</a></li>
                  <li><a href="#Footer">Footer</a></li>
                </ul>
                <ul className="link_1" >
                  <li><a href="#Home">Register</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Program">Program</a></li>
                  <li><a href="#Register">Register</a></li>
                  <li><a href="#Footer">Footer</a></li>
                </ul>
                <div className="link_1 link_1_1">
                  <h4>GET IN TOUCH</h4>
                  The Church of Christ<br/>
                  Buea, Cameroon.<br/>
                  P.O Box 4022 Nlongkak Yaounde<br/>
                  cocbuea@gmail.com 
                </div>
              </div>
            </div>
            <div className="churches_marquee">
            <div className="tryMe">
              <a className="name">CHURCH OF CHRIST <span className="town">Biyemassi</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Yaounde</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Bamenda</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Kumba</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Riverside</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Cite de la Paix</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Muea</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Bomaka</span></a>
              <a className="name">CHURCH OF CHRIST <span className="town">Street 4</span></a>
            </div>
            </div>

          </footer>
        </div>
    );
  }
}

export default Footer;
