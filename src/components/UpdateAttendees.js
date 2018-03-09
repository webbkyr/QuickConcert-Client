import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import './UpdateAttendees.css';
import { addAttendee, fetchEventDetails } from '../actions';

 class UpdateAttendees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: false,
      attendees: this.props.attendees
    }
    this.handleAddAttendees.bind(this);
  }

  toggle() {
    this.setState({
      editor: !this.state.editor
    })
  }

  handleAddAttendees(attendee) {
    const newAttendee = attendee;
    const id = this.props.eventId
    const attendeeInfo = ({
      newAttendee,
      id
    })
    this.props.dispatch(addAttendee(attendeeInfo))
    this.props.dispatch(fetchEventDetails(id))
  }

  render() {  
    let attendeeView =
      <ol className='attendees-container'>
        {this.props.attendeeList}
      </ol>

    let text = <p id='attendee-label'>Attendees</p>
    
    if (this.state.editor) {
      return (
      <div className='attendee-edit'>
        {text}
        {attendeeView}
          <input key='input' id='input-add-attendee' type='text' placeholder='Name' ref='attendee' />
          <Button key='button1' id='add-attendee-action' buttonText='Add' onClick={() => this.handleAddAttendees(this.refs.attendee.value)} />
          <Button key='button2' id='cancel-add-attendee' buttonText='Cancel' onClick={() => this.toggle()}/>
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

const mapStateToProps = state => ({
    attendees: state.detailsReducer.attendees,
    eventId: state.detailsReducer.eventDetails.id
})

export default connect(mapStateToProps)(UpdateAttendees);

