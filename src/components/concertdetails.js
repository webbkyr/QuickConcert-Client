import React from 'react';
import { connect } from 'react-redux'
import ShareEvent from './shareevent';
import OpenModal from './openmodal';
import './concertdetails.css';

export function ConcertDetails(props) {
  const list = props.concerts.map((concert, index) => {
    return (
      <li key={index}>
      <div>{concert.name}</div>
      <div>{concert.classifications[0].genre.name}</div>
      <div>{concert.dates.start.localDate}</div>
      <div>{concert.dates.start.localTime}</div>
      <div><a target='_blank' href={concert.url}><button>Buy Tickets</button></a></div>
      <div><OpenModal concert={concert}/></div>
      {/* <div><ShareEvent concert={concert} />Share</div> */}
      </li>
  )});
  return (
  <ul className='concert-results'>{list}</ul>
  )
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts
  }
}

export default connect(mapStateToProps)(ConcertDetails)