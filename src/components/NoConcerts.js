import React from 'react';
import { connect } from 'react-redux'
import './NoConcerts.css';

export function HandleNoConcerts(props) {
return (
      <p className='noresults'>Sorry, no concerts in this area tonight.</p> 
    )
}


export default connect()(HandleNoConcerts)

