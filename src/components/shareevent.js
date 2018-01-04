import React from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/eventlinks'
import { showModal, hideModal } from '../actions/modal';
import { OpenModal } from './openmodal';
import { selectConcert } from '../actions/concerts';
import './modal.css';

//modal opens
//have user enter their name
//click 'create event' to fire off the dispatch for FetchLink

export class ShareEvent extends React.Component {

  
  // console.log('ShareEvent Props', props)
  // console.log(props.selectedConcert)
  // componentWillMount()  {
  //   this.props.dispatch(selectConcert(this.props.concert))

  // }
//   let concertInfo = ({
//     eventName: props.concert.name,
//     creator: 'Self', //props.creator
//     attendee: 'Kayla' //props.creator
//   })
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
  this.props.dispatch(fetchSharedLink(name, concert));
}

handleSelectedConcert() {
  if (this.props.selectedConcert === null) {
    return
  } else {
    return <p>Event Title: {this.props.selectedConcert.name} <br/>
          Date: {this.props.selectedConcert.dates.localDate} <br/>
          Time: {this.props.selectedConcert.dates.localTime} <br/>
          </p>
  }
}

// else {
//   return <p>Name: {props.selectedConcert.name} <br/>
// ID: {props.selectedConcert.id} <br/>
// URL: {props.selectedConcert.url}</p>
// }
// }

render() {
  return (
    
    <div className='modal' style={{'display':(this.props.isModalOpen)?'block':'none'}}>
    {/* <OpenModal /> */}
    {/* <button onClick={() => props.dispatch(showModal())}className='button'>Share</button> */}
    <div className='modal-content'>
    <h1>Share this Concert</h1>
    <div>{this.handleSelectedConcert()}</div>
    <form onSubmit={(e) => this.handleCreateEvent(e, 'test concert 5pm')}>
      <input 
      type='text'  
      ref={input => this.input = input}
      required
      name='name'
      placeholder='Your Name'/>
    {/* <p>Event: {props.selectedConcert.name}</p> */}
    {/* <p>Event: {props.selectedConcert === null? '' :` ${props.selectedConcert.name}`}</p> */}
      <button className='close' onClick={() => this.props.dispatch(hideModal())}>Close</button>
      <button 
      type='submit'
      name='usersname'
      className='close' 
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