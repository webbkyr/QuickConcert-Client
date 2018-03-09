import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/eventlinks'
import { hideModal } from '../actions/modal';
import EventConfirmation from './EventConfirmation';
import Button from './Button';
import './modal.css';

export class ShareEvent extends Component {
  handleCreateEvent(e, concert) {
    console.log('HANDLE EVENT CONCERT', concert)
    e.preventDefault();
    const name = this.input.value;
    const concertInfo = ({
      eventName: concert.name, 
      eventDetails: [{
       concertDate: concert.dates.start.localDate,
       concertTime: concert.dates.start.localTime,
       concertURL: concert.url
      }],
      creator: name,
      attendee: name
    })
    this.props.dispatch(fetchSharedLink(concertInfo));
  }

  handleSelectedConcert() {
    if (this.props.selectedConcert === null) {
      return
    } else {
      return (
        <div>
            <p id='share-link-p'>Event Title: {this.props.selectedConcert.name} <br/>
            Date: {this.props.selectedConcert.dates.start.localDate} <br/>
            Time: {this.props.selectedConcert.dates.start.localTime} 
            </p>
        </div>
        )
      }
    }

  render() {
    return (    
      <div className='modal' style={{'display':(this.props.isModalOpen)?'block':'none'}}>
          <div className='modal-content'>
            <h1>Share this Concert</h1>
            <div>{this.handleSelectedConcert()}
          </div>
          <form onSubmit={(e) => this.handleCreateEvent(e, this.props.selectedConcert)}>
            <input className='modal-input'
            type='text'  
            ref={input => this.input = input}
            required
            placeholder='Your Name'/>
            {this.props.eventLink !=null ? <EventConfirmation /> : null}
            <Button className='closeModal' buttonText='Close' onClick={() => this.props.dispatch(hideModal())} />
            <button type='submit' name='createEvent'className='createEvent'>Create Event</button>
          </form>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    concerts: state.concertsReducer.concerts,
    selectedConcert: state.concertsReducer.selectedConcert,
    isModalOpen: state.modalReducer.isModalOpen,
    eventLink: state.eventLinkReducer.eventLink
  }
}

export default connect(mapStateToProps)(ShareEvent)