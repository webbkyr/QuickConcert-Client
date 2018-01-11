import React from 'react';
import { connect } from 'react-redux'
// import ShareEvent from './shareevent';
// import './ConcertDetails.css';
import { selectConcert } from '../actions/concerts';
import { showModal } from '../actions/modal';
import { withRouter } from 'react-router-dom';

export function SearchResults(props) {
console.log('SearchResults Props', props)

// if (props.concerts) {
//   props.history.push('/search/concerts')
// } else {
//   return;
// }

// const handleResults = () => {
//   props.history.push('/search/concerts');
// }
  
  const handleActions = (concert) => {
    props.dispatch(selectConcert(concert));
    props.dispatch(showModal());
    
    
  }
  
  return (
    <ul>
      {props.list}
    </ul>

  )
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts,
  }
}

export default withRouter(connect(mapStateToProps)(SearchResults))