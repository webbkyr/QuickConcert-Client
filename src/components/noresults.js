import React from 'react';
import { connect } from 'react-redux'
import './noresults.css';

export function HandleNoConcerts(props) {
  if (props.concerts === []) {
return (
      <p className='noresults'>Sorry, no concerts tonight.</p>
    )
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts || []
  }
}

export default connect(mapStateToProps)(HandleNoConcerts)

//currently not working