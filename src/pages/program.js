import React, { Component } from 'react';

class Program extends Component {

// variables definition 
constructor(props) {
  super(props)
  this.state = {
      events : [
                 {
                    "title": "What can separate us from the Love of God?",
                    "time": "Rom. 8:32 -38",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Itali Ignatius / Simon Motaze",
                  },
                  {
                    "title": "The Power of Fellowship",
                    "time": "Acts 2:42 / Eph. 4: 1-3",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Loius Bassay/ Yemte Albert",
                  },
                  {
                    "title": "Church autonomy- its limits and impacts",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait",
                    "person": "Ethe Jean / Ntoh Robert",
                  },
                  {
                    "title": "Evangelism",
                    "time": "January 4, 2018",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables d.",
                    "person": "All participants",
                  },
                  {
                    "title": "Having the mindset of Christ",
                    "time": "Phil 2:5-9",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Prince O/ Leutze Hermann",
                  },
                  {
                    "title": "Who is a Christian?",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Nkimbeng Desmond / Ndobe Peter",
                  },
                  {
                    "title": "The necessity of perils to a Christian.",
                    "time": "II Tim 3:12-14/ James 1:2-4.",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Elder Omam Christopher/ Bro Njah Alfred",
                  },
                  {
                    "title": "Preachers’ support- a command or an option",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Nsah Vincent / Mbecha Terence",
                  },
                  {
                    "title": "the 21st Century Christian Woman and the Victorian concept",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Patricia Mafani/ Sis. Sidoni",
                  },
                  {
                    "title": "Health talks",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Dr. Agborya Nelson, Dr. Mboka Fred, Dr.Ekambi",
                  },
                  {
                    "title": "Judgement day.",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Abasiama John/ Bro Andy Leroy",
                  },
                  {
                    "title": "Worship",
                    "time": "-",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "All Participants",
                  }
              ]
     }
  }
 

  render() {
    return (
        <div className="main">
          <div className="Content push">
            <h1>Program</h1>
            <hr/>
            <p>Timeline</p>
            {/* this loop creates all the events in the constructor  */}
            {this.state.events.map((event,i)  => 
              <div className="event">
                <div className="event_lft">
                  <h2>{event.title}</h2>
                  <p>{event.time}</p>
                </div>
                <div className="event_line">
                  <div className="dot"></div>
                  <div className="tp_line"></div>
                  <div className="line"></div>
                  <div className="btm_line"></div>
                </div>
                <div className="event_rght">
                  <p>{event.descr}</p>
                  <p><b>{event.person}</b></p>
                </div>
              </div>
            )}
            <br/><br/>
          <a className="btn" href="https://goo.gl/forms/VJAGxz3Mk0E9UD4w2" target="_blank" rel="noopener noreferrer">Register</a>
          <p>Download the Full program here!</p>
          </div>

        </div>
    );
  }
}

export default Program;
