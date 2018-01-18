import React from 'react';
import { withRouter } from 'react-router-dom';
import './UpdateAttendees.css';
import { connect } from 'react-redux';
import { sendAttendeesUpdate } from '../actions/event-updates';
import {Button} from './Button';

 class UpdateAttendees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: false,

    }
  }


  toggle() {
    this.setState({
      editor: !this.state.editor
    })
  }


  render() {  
    let attendeeView =
      <ul className='attendees-container'>
        {this.props.attendeeList}
      </ul>

    let text = <p>Who's Going?</p>
    

    if (this.state.editor) {
      return (
      <div className='attendee-edit'>
        {text}
        {attendeeView}
        <input id='input-add-attendee' type='text' placeholder='Name' ref='attendee-add' />
        <Button id='add-attendee-action' buttonText='Add'  />
        <Button id='cancel-add-attendee' buttonText='Cancel' onClick={() => this.toggle()} />
      </div>
      )
    } else {

      return (
        <div className='attendee-edit'>
        {text}
          {attendeeView}
          <Button id='attendee-open-editor' buttonText='Add Attendee' onClick={() => this.toggle()} />
        </div>
      )
    }
  
  }

 
}

const mapStateToProps = state => {

  return {
    attendees: state.detailsReducer.attendees
  }
}

export default connect(mapStateToProps)(UpdateAttendees);

