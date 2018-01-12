import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchEventDetails } from '../actions/event-details';
import './usereventdetails.css';
import  UpdateCreator  from './UpdateCreator';


export class UserEventDetails extends React.Component {

  componentDidMount() {
    if (this.props.eventId) {
    this.props.dispatch(fetchEventDetails(this.props.eventId))
  
    } else {
      return;
    }

}

render() {

  console.log('User event details props', this.props)

  let eventName = '';
  let creator = '';
  let attendeeList = '';

  if (this.props.eventDetails) {
    eventName = this.props.eventDetails.eventName;
    creator = this.props.eventDetails.creator;
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
        <UpdateCreator name={creator}/>
        <ul className='attendees-container'>Current Attendees: {attendeeList}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const eventId = props.match.params.eventId
  return {
    eventId,
    eventDetails: state.eventDetails,
  }
}

export default withRouter(connect(mapStateToProps)(UserEventDetails));