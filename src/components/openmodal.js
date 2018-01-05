import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/modal';
import { selectConcert } from '../actions/concerts';
// import { ShareEvent } from './shareevent';

export function OpenModal(props) {
console.log('OpenModal', props)

  return (
    <button 
    onClick={() => {
      props.dispatch(selectConcert(props.selectedConcert))
      props.dispatch(showModal())}
    }
    className='button'>Share</button>
  )
}

export const mapStateToProps = state => {
  return {
    selectedConcert: state.selectedConcert,
  }
}

export default connect()(OpenModal)