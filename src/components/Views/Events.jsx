import React, { Component } from 'react';
import '../styles/events.css';


export class Events extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="eventsView">
        <h3>Events</h3>
        <div className="eventsCalendar">
          No Currently Scheduled Events
        </div>
      </div>
    );
  }
}
