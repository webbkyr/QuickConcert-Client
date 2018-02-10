import React from 'react';
import { connect } from 'react-redux'
import ShareEvent from './shareevent';
import  Button  from './Button';
import { selectConcert } from '../actions/concerts';
import { showModal } from '../actions/modal';
import { withRouter } from 'react-router-dom'

import './Concert-Details.css';
import  HandleNoConcerts  from './NoConcerts';

export function ConcertDetails(props) {

  if (props.concerts.length < 1) {
    return <HandleNoConcerts />
  }
  
  const handleActions = concert => {
    props.dispatch(selectConcert(concert));
    props.dispatch(showModal());
  }

  const list = props.concerts.map(concert => {
    const concertGenre = concert.classifications[0].genre.name;
    const url = concert.url;
    
    return (
      <li className='tkmConcertList' key={concert.id}>
        <div id='concert-name'>{concert.name}</div>
        <div id='concert-genre'>{concertGenre ? concertGenre : null}</div>
        <div id='concert-date'>{concert.dates.start.localDate}</div>
        <div id='concert-time'>{concert.dates.start.localTime}</div>
        <div id='buy-tickets-container'>
          <a target='_blank' href={concert.url}>
            <Button id='buy-tickets-button' buttonText='Buy Tickets'/>
          </a>
        </div>
        <div id='share-button-container'>
          <Button id='share-button' buttonText='Share' 
            onClick={() => handleActions(concert)} />
        </div>
        <div>
          <ShareEvent />
        </div>
      </li>
  )});

  return (
    <ul className='concert-results'>
      {list}
    </ul>
  )
}

const mapStateToProps = state => ({
    concerts: state.concertsReducer.concerts,
})

export default withRouter(connect(mapStateToProps)(ConcertDetails))