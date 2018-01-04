import React from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/eventlinks'
import { showModal, hideModal } from '../actions/modal';

//modal opens
//have user enter their name
//click 'create event' to fire off the dispatch for FetchLink

export function ShareEvent(props) {
//   let concertInfo = ({
//     eventName: props.concert.name,
//     creator: 'Self', //props.creator
//     attendee: 'Kayla' //props.creator
//   })
console.log('ShareEvent Props', props)
  return (
    <div>
    {/* <button onClick={() => props.dispatch(showModal())}className='button'>Share</button> */}
    <p>Concert Details Here</p>
    <button onClick={() => props.dispatch(hideModal())}>Close</button>
    </div>
  )
}

export default connect()(ShareEvent)