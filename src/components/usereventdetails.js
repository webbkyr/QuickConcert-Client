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
    <p>{props.eventDetails.eventName}</p>
    <p>Creator:{props.eventDetails.creator}</p>
    <ul>Attendees:{attendeeList}</ul>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetails,
  }
}

export default connect(mapStateToProps)(UserEventDetails)