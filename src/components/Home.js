import React from 'react';
import { connect } from 'react-redux';
import BeginConcertSearch from './BeginConcertSearch';
import './Home.css';

export class Home extends React.Component {
  render() {
    let titleText = <h1 id='home-title'>quick concert</h1>
     
  return (
    <section id='home'>
      <div>
        {titleText}
        <BeginConcertSearch />
      </div>
    </section>

    );
  }
}

export default Home;
