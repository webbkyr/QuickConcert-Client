import React from 'react';
import { connect } from 'react-redux'
import ShareEvent from './shareevent';
import { selectConcert } from '../actions/concerts';
import { showModal } from '../actions/modal';
import { withRouter } from 'react-router-dom'
// import * as moment from 'moment';

import './Concert-Details.css';
import  HandleNoConcerts  from './noresults';

export function ConcertDetails(props) {
  console.log('Concert details props', props);

  if (props.concerts.length < 1) {
    return <HandleNoConcerts />
  }
  
  const handleActions = (concert) => {
    props.dispatch(selectConcert(concert));
    props.dispatch(showModal());
    
  }

  
  const list = props.concerts.map((concert, index) => {
    
    return (
      <li className='tkmConcertList' key={concert.id}>
      <div id='concert-name'>{concert.name}</div>
      <div id='concert-genre'>{concert.classifications[0].genre.name}</div>
      <div id='concert-date'>{concert.dates.start.localDate}</div>
      <div id='concert-time'>{concert.dates.start.localTime}</div>
      <div id='buy-tickets-container'><a target='_blank' href={concert.url}><button id='buy-tickets-button'>Buy Tickets</button></a></div>
      <div id='share-button-container'><button id='share-button'
        onClick={() => handleActions(concert)}
      >Share</button></div>
      <div><ShareEvent /></div>
      </li>
  )});
  return (
    <ul className='concert-results'>
      {list}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    concerts: state.concertsReducer.concerts,
  }
}

export default withRouter(connect(mapStateToProps)(ConcertDetails))