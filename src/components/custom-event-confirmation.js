import React from 'react';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config'
import { LandingPage } from './landingpage';
import { fetchEventDetails } from '../actions/event-details';
import  UserEventDetails  from './usereventdetails';


export function EventConfirmation(props) {
console.log(props.eventDetails)

  return (
    <div>
      <p>Share this link with your friends to add attendees! <br/>
      <span 
        onClick={() => {
        props.dispatch(fetchEventDetails(props.eventLink.id))}}>
        <a href='#'>{props.eventLink.id}</a>
      </span>
      {props.showEventDetailsView ? <UserEventDetails /> : null}
      </p>
    </div>
    ) 
  
}

export const mapStateToProps = state => {
  return {
    showEventDetailsView: state.showEventDetailsView,
    eventLink: state.eventLink
  }
}



export default connect(mapStateToProps)(EventConfirmation)