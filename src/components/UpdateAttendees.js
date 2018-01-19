import React from 'react';
// import { withRouter } from 'react-router-dom';
import './UpdateAttendees.css';
import { connect } from 'react-redux';
// import { sendAttendeesUpdate } from '../actions/event-updates';
// import { TransitionGroup } from 'react-transition-group';
import { Button } from './Button';

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
      <ol className='attendees-container'>
        {this.props.attendeeList}
      </ol>

    let text = <p>Who's Going?</p>
    

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

const mapStateToProps = state => {

  return {
    attendees: state.detailsReducer.attendees
  }
}

export default connect(mapStateToProps)(UpdateAttendees);

