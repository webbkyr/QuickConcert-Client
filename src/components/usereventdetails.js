import React from 'react';
import { connect } from 'react-redux'

export function UserEventDetails(props) {
console.log('User event details props', props)

const attendeeList = props.eventDetails.attendees.map((attendee, index) => {
  return (
    <li key={index}>{attendee.attendee}</li>
  )
})
  return (
  <div>
    <h1>{props.eventDetails.eventName}</h1>
    <p>{props.eventDetails.creator}</p>
    <p>Attendees:</p>
    <ul>{attendeeList}</ul>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetails,
  }
}

export default connect(mapStateToProps)(UserEventDetails)