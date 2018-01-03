import React from 'react';
import { connect } from 'react-redux';
import './begin.css'

export function BeginConcertSearch(props) {
  return (
    <button name='Begin' className='button'>Go!</button> 
  )
}

export default connect()(BeginConcertSearch)