import React from 'react';
import { connect } from 'react-redux'
import './noresults.css';

export function HandleNoConcerts(props) {
console.log(props)
return (
      <p className='noresults'>Sorry, no concerts tonight.</p>
    )
}


const mapStateToProps = state => {
    return {
      concerts: state.concerts || []
    }
  }

export default connect(mapStateToProps)(HandleNoConcerts)

//currently not working