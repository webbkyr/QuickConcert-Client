import React from 'react';
import { connect } from 'react-redux';
import './begin.css'
import { Link } from 'react-router-dom';
import { UserLocation } from './userinput';
import { withRouter } from 'react-router-dom';

export function BeginConcertSearch(props) {

const beginSearch = () => {
    props.history.push('/search');
  }
  return (

    <button 
      onClick={() => {
        beginSearch()
      }} name='Begin' 
      className='button'>Go!
    </button> 
    
  )
}

export default withRouter(connect()(BeginConcertSearch))