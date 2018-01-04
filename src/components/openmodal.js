import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/modal';

//modal opens
//have user enter their name
//click 'create event' to fire off the dispatch for FetchLink

export function OpenModal(props) {
console.log('OpenModal', props)
  return (
    <button onClick={() => props.dispatch(showModal())}className='button'>Share</button>
  )
}

export default connect()(OpenModal)