import React from 'react';
import { connect } from 'react-redux';
// import { fetchEventDetails } from '../actions/event-details';
// import  UserEventDetails  from './usereventdetails';
import { Link } from 'react-router-dom';
// const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';


export function EventConfirmation(props) {
console.log(props)

// function GetUsersEvent() {
//   return props.dispatch(fetchEventDetails(props.eventLink.id))
// }

// GetUsersEvent();

  return (
    <div>
      <p>Share this link with your friends to add attendees! <br/>
      <Link to={`/event/${props.eventLink.id}`}>Link</Link>
      

{/*       
      {props.showEventDetailsView ? <Link to={`/event/${props.eventLink.id}`}>${BASE_URL}/{props.eventLink.id}</Link> : null} */}
      {/* <span 
        onClick={() => {
        props.dispatch(fetchEventDetails(props.eventLink.id))}}>
        <Link to='/event/{props.eventLink.id}'>{props.eventLink.id}</Link>
      </span> */}
      {/* {props.showEventDetailsView ? <UserEventDetails /> : null} */}
      </p>
    </div>
    ) 
  
}

export const mapStateToProps = (state, props) => {
  console.log(props)
  return {
    showEventDetailsView: state.showEventDetailsView,
    eventLink: state.eventLink
  }
}



export default connect(mapStateToProps)(EventConfirmation)