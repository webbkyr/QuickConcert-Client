import React from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/eventlinks'
import { hideModal } from '../actions/modal';
import './modal.css';
import EventConfirmation from './EventConfirmation';
// import { fetchEventDetails } from '../actions/event-details';

//changed from extends component to pureComponent.. behavior is the same
export class ShareEvent extends React.Component {

handleCreateEvent(e, concert) {
  e.preventDefault();
  const name = this.input.value;
  const concertInfo = ({
    eventName: concert, 
    creator: name,
    attendee: name
  })

  console.log(concertInfo);
  this.props.dispatch(fetchSharedLink(concertInfo));
}

handleSelectedConcert() {
  if (this.props.selectedConcert === null) {
    return
  } else {
    return <div>
          <p>Event Title: {this.props.selectedConcert.name} <br/>
          Date: {this.props.selectedConcert.dates.start.localDate} <br/>
          Time: {this.props.selectedConcert.dates.start.localTime} 
          </p>
          </div>
  }
}


render() {
  return (    
    <div className='modal' style={{'display':(this.props.isModalOpen)?'block':'none'}}>

    <div className='modal-content'>
      <h1>Share this Concert</h1>
      <div>{this.handleSelectedConcert()}
    </div>

    <form onSubmit={(e) => this.handleCreateEvent(e, this.props.selectedConcert.name)}>
      <input className='modal-input'
      type='text'  
      ref={input => this.input = input}
      required
      name='name'
      placeholder='Your Name'/>
 
      {this.props.eventLink !=null ? <EventConfirmation /> : null}

      <button className='closeModal' onClick={() => this.props.dispatch(hideModal())}>Close</button>
      <button 
      type='submit'
      name='createEvent'
      className='createEvent' 
      >
      Create Event</button>
    </form>
    </div>
    </div>
  )
}

}

export const mapStateToProps = state => {
  return {
    concerts: state.concerts,
    selectedConcert: state.selectedConcert,
    isModalOpen: state.isModalOpen,
    eventLink: state.eventLink
  }
}

export default connect(mapStateToProps)(ShareEvent)