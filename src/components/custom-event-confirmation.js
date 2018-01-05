import React from 'react';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config'


export function EventConfirmation(props) {
console.log(props)

  return (
    <p>Share this link with your friends to add attendees! <br/>
    {API_BASE_URL}/api/concerts/{props.eventLink.id}</p>
    ) 
  
}

export const mapStateToProps = state => {
  return {
    eventLink: state.eventLink
  }
}

//fixed bug on ShareEvent by importing the default connected component EventConfirmation instead of the named non-connected component { EventConfirmation}

export default connect(mapStateToProps)(EventConfirmation)