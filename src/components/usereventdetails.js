import React from 'react';
import { connect } from 'react-redux'

export function UserEventDetails(props) {

  return (
  <div><h1>{detail.eventName}</h1>
  <p>{detail.creator}</p>
  <p>{detail.attendees}</p>
  </div>
  )
  
 
}

const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetails,
  }
}

export default connect(mapStateToProps)(UserEventDetails)