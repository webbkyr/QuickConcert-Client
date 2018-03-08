import React from 'react';
import { connect } from 'react-redux'
import { selectConcert } from '../actions/concerts';
import { showModal } from '../actions/modal';
import { withRouter } from 'react-router-dom'
import ShareEvent from './shareevent';
import Button from './Button';
import HandleNoConcerts from './NoConcerts';
import Moment from 'moment';
import './Concert-Details.css';

export function ConcertDetails(props) {
  console.log('PROPS DOT MATCH', props.match)

  if (props.concerts.length < 1) {
    return <HandleNoConcerts />
  }
  
  const handleActions = concert => {
    props.dispatch(selectConcert(concert));
    props.dispatch(showModal());
  }

  const list = props.concerts.map(concert => {
    const concertGenre = concert.classifications[0].genre.name;
    const concertTime = Moment(concert.dates.start.localTime, 'HH:mm').format('h:mm a')
    const concertDate = Moment(concert.dates.start.localDate).format('MMM Do YYYY')
    
    return (
      <li className='tkmConcertList' key={concert.id}>
        <div id='concert-name'>{concert.name}</div>
        <div id='concert-genre'>{concertGenre ? concertGenre : null}</div>
        <div id='concert-date'>{concertDate}</div>
        <div id='concert-time'>{concertTime}</div>
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