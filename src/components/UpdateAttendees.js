import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import './UpdateAttendees.css';

 class UpdateAttendees extends Component {
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
      <ol className='attendees-container'>
        {this.props.attendeeList}
      </ol>

    let text = <p id='attendee-label'>Attendees</p>
    
    if (this.state.editor) {
      return (
      <div className='attendee-edit'>
        {text}
        {attendeeView}
          <input key='input' id='input-add-attendee' type='text' placeholder='Name' ref='attendee-add' />
          <Button key='button1' id='add-attendee-action' buttonText='Add' onClick={() => console.log('handle sending the additional attendees to the database')} />
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
    attendees: state.detailsReducer.attendees
})

export default connect(mapStateToProps)(UpdateAttendees);

