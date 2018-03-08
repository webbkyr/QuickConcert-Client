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
  let concertDate = '';
  let concertTime = '';
  let concertURL = '';

  if (this.props.eventDetails) {
    console.log('EVENT DETAILS PAGE', this.props.eventDetails.eventDetails[0])
    eventName = this.props.eventDetails.eventName;
    // concertDate = this.props.eventDetails.eventDetails.concertDate;
    // concertTime = this.props.eventDetails.eventDetails.concertTime;
    concertURL = this.props.eventDetails.eventDetails[0].concertURL;
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
        <p>{concertDate}</p>
        <p>{concertTime}</p>
        <p id='get-tickets'><a href={concertURL} target='_blank' >Get Tickets</a></p>
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

