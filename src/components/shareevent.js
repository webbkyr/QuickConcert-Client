import React from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/eventlinks'
import { showModal, hideModal } from '../actions/modal';
import { OpenModal } from './openmodal';
import { selectConcert } from '../actions/concerts';

//modal opens
//have user enter their name
//click 'create event' to fire off the dispatch for FetchLink

export function ShareEvent(props) {
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

  return (
    
    <div style={{'display':(props.isModalOpen)?'block':'none'}}>
      <OpenModal />
    {/* <button onClick={() => props.dispatch(showModal())}className='button'>Share</button> */}
    <h1>Share this Concert</h1>
    <p>Event: {props.selectedConcert ? 'click' :` ${props.selectedConcert.name}`}</p>
    <button onClick={() => props.dispatch(fetchSharedLink())}>Create Event</button>
    <button onClick={() => props.dispatch(hideModal())}>Close</button>
    </div>
  )

}

export const mapStateToProps = state => {
  return {
    concerts: state.concerts,
    selectedConcert: state.selectedConcert,
    isModalOpen: state.isModalOpen
  }
}

export default connect(mapStateToProps)(ShareEvent)