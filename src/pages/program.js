import React, { Component } from 'react';

class Program extends Component {

// variables definition 
constructor(props) {
  super(props)
  this.state = {
      events : [
                 {
                    "title": "Organization Applications Open",
                    "time": "January 4, 2018",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Bro Gerard",
                  },
                  {
                    "title": "Organization Applications Open",
                    "time": "January 4, 2018",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Bro Gerard",
                  },
                  {
                    "title": "Organization Applications Open",
                    "time": "January 4, 2018",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Bro Gerard",
                  },
                  {
                    "title": "Organization Applications Open",
                    "time": "January 4, 2018",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 20172017.",
                    "person": "Bro Gerard",
                  },
                  {
                    "title": "Organization Applications Open",
                    "time": "January 4, 2018",
                    "descr":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                    "person": "Bro Gerard",
                  }
              ]
     }
  }
 

  render() {
    return (
        <div className="main">
          <div className="Content">
            <h1>Program</h1>
            <hr/>
            <p>The Full Program Timeline</p>
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
          </div>

        </div>
    );
  }
}

export default Program;
