import React from 'react';
import { connect } from 'react-redux'
import './NoConcerts.css';

export function HandleNoConcerts() {
return (
      <p className='noresults'>Sorry, no concerts in this area tonight.</p> 
    )
}
//if i dont connect to redux i can remove this line
//import handleno with curly; import HandleNoConcerts if export def
export default HandleNoConcerts;

