import React from 'react';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config'
import { LandingPage } from './landingpage';
import { fetchEventDetails } from '../actions/event-details';


export function EventConfirmation(props) {
console.log(props.eventDetails)
//if link clicked then show different view

  return (
    <p>Share this link with your friends to add attendees! <br/>
    <span onClick={() => props.dispatch(fetchEventDetails(props.eventLink.id))}>{API_BASE_URL}/api/concerts/{props.eventLink.id}</span></p>
    ) 
  
}

export const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetails,
    eventLink: state.eventLink
  }
}

//fixed bug on ShareEvent by importing the default connected component EventConfirmation instead of the named non-connected component { EventConfirmation}

export default connect(mapStateToProps)(EventConfirmation)