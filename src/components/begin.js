import React from 'react';
import { connect } from 'react-redux';
import './begin.css'
import { Link } from 'react-router-dom';
import { UserLocation } from './userinput';
import { withRouter } from 'react-router-dom';
// import { displayUserLocation } from '../actions/concerts';

//add a link to '/search'
export function BeginConcertSearch(props) {

const beginSearch = () => {
    props.history.push('/search');
  }
  return (
    // <button 
    // onClick={() => props.dispatch(displayUserLocation())} name='Begin' 
    // className='button'>Go!
    // </button> 
    <button 
      onClick={() => {
        beginSearch()
      }} name='Begin' 
      className='button'>Go!
    </button> 
  )
}

export default withRouter(connect()(BeginConcertSearch))