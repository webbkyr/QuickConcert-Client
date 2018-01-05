import React from 'react';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';
import './userinput.css';


export class UserLocation extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const value = this.input.value.toLowerCase();
    this.props.dispatch(fetchConcerts(value));
  
  }
  
  render() {
    return (
      <form onSubmit={(e) => {
        id='search-form'
        this.handleSubmit(e)}}>
      <input 
        id="search-input"
        type='text' 
        name='userLocation' 
        ref={input => this.input = input}
        required 
        placeholder='Atlanta'/>
      <button 
        type='submit' 
        name='Search' 
        id='searchButton' 
        className='button'>
        Search</button>
    </form>
    )
  }
  
}

export default connect()(UserLocation)