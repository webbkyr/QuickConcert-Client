import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchEventDetails } from '../actions/event-details';
import UpdateCreator from './UpdateCreator';
import UpdateAttendees from './UpdateAttendees';
import './usereventdetails.css';

export class UserEventDetails extends Component {
  componentDidMount() {
    if (this.props.eventId) {
    this.props.dispatch(fetchEventDetails(this.props.eventId))
    } 
    else {
      return;
    }
  }

render() {
  let eventName = '';
  let attendeeList = '';

  if (this.props.eventDetails) {
    eventName = this.props.eventDetails.eventName;
    attendeeList = this.props.eventDetails.attendees.map((attendee, index) => {
      return (
        <li id='event-attendees' key={index}>{attendee.attendee}</li>
        )
      });
  } else {
    return '';
  }
    return (
      <div className='event-details-container'>
        <p className='my-event'>My Event</p>
        <p id='user-event-name'>{eventName}</p>
        <UpdateCreator />
        <UpdateAttendees attendeeList={attendeeList} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const eventId = props.match.params.eventId
  return {
    eventId,
    eventDetails: state.detailsReducer.eventDetails,
  }
}

export default withRouter(connect(mapStateToProps)(UserEventDetails));

