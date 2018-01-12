import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './EventConfirmation.css';


export function EventConfirmation(props) {

  return (
    <div>
      <p>Share this link with your friends to add attendees! <br/>
      <Link id='event-link'to={`/event/${props.eventLink.id}`}>Here's your link</Link>
      </p>
    </div>
    ) 
  
}

export const mapStateToProps = (state, props) => {
  return {
    eventLink: state.eventLink
  }
}



export default connect(mapStateToProps)(EventConfirmation)