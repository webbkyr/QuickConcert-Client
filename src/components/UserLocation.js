import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchConcerts } from '../actions/concerts';
import './UserLocation.css';


export class UserLocation extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const value = this.input.value.toLowerCase();
    this.props.dispatch(fetchConcerts(value, this.props.history));
  
  }
  
  render() {
    return (
      <form 
      id='search-form'
      onSubmit={
        this.handleSubmit.bind(this)}>
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
        className='searchButton'>
        Search</button>
    </form>
    )
  }
  
}

export default withRouter(connect()(UserLocation))