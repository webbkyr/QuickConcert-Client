import React, { Component } from 'react';
import BeginConcertSearch from './BeginConcertSearch';
import './Home.css';

export default class Home extends Component {
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
