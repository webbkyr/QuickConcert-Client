import React from 'react';
import { connect } from 'react-redux';
import './begin.css'
import { Link } from 'react-router-dom';
// import { displayUserLocation } from '../actions/concerts';

//add a link to '/search'
export function BeginConcertSearch(props) {
  return (
    // <button 
    // onClick={() => props.dispatch(displayUserLocation())} name='Begin' 
    // className='button'>Go!
    // </button> 
    <button 
      onClick={() => {
        <Link to='/search'></Link>
      }} name='Begin' 
      className='button'>Go!
    </button> 
  )
}

export default connect()(BeginConcertSearch)