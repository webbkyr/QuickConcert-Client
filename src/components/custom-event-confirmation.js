import React from 'react';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config'


export function EventConfirmation(props) {
console.log('Event ID', props)


return (
  <p>Share this link with your friends to add attendees! <br/>
  {API_BASE_URL}/api/concerts{props.id}</p>
)
}

export const mapStateToProps = state => {
  return {
    eventLink: state.eventLink
  }
}

export default connect(mapStateToProps)(EventConfirmation)