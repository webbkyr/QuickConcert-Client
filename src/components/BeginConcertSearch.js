import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from './Button';

import './BeginConcertSearch.css'


export function BeginConcertSearch(props) {

const beginSearch = () => {
    props.history.push('/search');
  }
  return (
    <Button buttonText='Go!' onClick={() => beginSearch()} />
  )
}

export default withRouter(connect()(BeginConcertSearch))