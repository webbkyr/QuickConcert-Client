import React from 'react';
import { connect } from 'react-redux'
import ShareEvent from './shareevent';
import './ConcertDetails.css';
import { selectConcert } from '../actions/concerts';
import { showModal } from '../actions/modal';
import { withRouter } from 'react-router-dom';

export function ConcertDetails(props) {
console.log('ConcertDetails Props', props)
  
  const handleActions = (concert) => {
    props.dispatch(selectConcert(concert));
    props.dispatch(showModal());
    
  }
  
  const list = props.concerts.map((concert, index) => {
    console.log(list)
    return (
      <li className='tkmConcertList' key={concert.id}>
      <div>{concert.name}</div>
      <div>{concert.classifications[0].genre.name}</div>
      <div>{concert.dates.start.localDate}</div>
      <div>{concert.dates.start.localTime}</div>
      <div><a target='_blank' href={concert.url}><button>Buy Tickets</button></a></div>
      <div><button 
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
    concerts: state.concerts,
  }
}

export default withRouter(connect(mapStateToProps)(ConcertDetails))