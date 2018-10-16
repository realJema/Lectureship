import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="main bg_img">
            <div className="Content white">
                <h1>ANNUAL GOSPEL LECTURESHIP</h1>
                <h3>THE CHURCHES OF CHRIST</h3>
                <h5>CAMEROON</h5>
                <hr/>
            <div className="Content_2">
                <div>
                    <h3>Theme:</h3>
                    <h1>Christian Integrity During Perilous Times</h1>
                    <span>Matthew 24:4-14</span>

                </div>
                <div className="date">
                <p>22-25</p>
                <div className="date_2">
                    <span>NOVEMBER</span><br/>
                    <span>2018</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
} 

export default Home;
