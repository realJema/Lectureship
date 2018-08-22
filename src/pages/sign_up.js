import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
        <div className="main2 bg_grey">
          <div className="Content">
            <h1>SIGN UP</h1>
            <hr/>
            <p>Register to Participate to this event!</p>
            <a className="btn" to={`http://www.google.com`}>Register</a>
          </div>
        </div>
    );
  }
}

export default Register;
