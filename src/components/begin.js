import React from 'react';
import { connect } from 'react-redux';
import './begin.css'
import { displayUserLocation } from '../actions/concerts';

//add a link to '/search'
export function BeginConcertSearch(props) {
  return (
    <button 
    onClick={() => props.dispatch(displayUserLocation())} name='Begin' 
    className='button'>Go!
    </button> 
  )
}

export default connect()(BeginConcertSearch)