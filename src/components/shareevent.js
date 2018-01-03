import React from 'react';
import { connect } from 'react-redux';
import { fetchSharedLink } from '../actions/concerts'

export function ShareEvent(props) {
  let concertInfo = ({
    eventName: props.concert.name,
    creator: 'Self', //props.creator
    attendee: 'Kayla' //props.creator
  })
 console.log(concertInfo)

  return (
    <button onClick={() => props.dispatch(fetchSharedLink(concertInfo))}className='button'>Share</button>
  )
}

export default connect()(ShareEvent)