import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from './Button';
import './BeginConcertSearch.css'

export function BeginConcertSearch(props) {
  return (
    <Button buttonText='Go!' onClick={() =>  props.history.push('/search')} />
  )
}

export default withRouter(connect()(BeginConcertSearch))