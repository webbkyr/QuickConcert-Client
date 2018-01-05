import React from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/eventlinks'
import { hideModal } from '../actions/modal';
// import { selectConcert } from '../actions/concerts';
import './modal.css';


export class ShareEvent extends React.Component {

//place some opacity on bckg so this will popout more
// console.log('ShareEvent Props', this.props.concert)
// console.log(props.selectedConcert.name)
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
    console.log(this.props.selectedConcert.dates.localDate)
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
      <input 
      type='text'  
      ref={input => this.input = input}
      required
      name='name'
      placeholder='Your Name'/>

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
    isModalOpen: state.isModalOpen
  }
}

export default connect(mapStateToProps)(ShareEvent)