import React from 'react';
import { connect } from 'react-redux';
import BeginConcertSearch from './begin';

import './landingpage.css';


export class LandingPage extends React.Component {
 

  render() {
    let titleText = <h1>quick concert</h1>
     
  return (
    <section id='landing'>
      <div>
        {titleText}
        <BeginConcertSearch />
      </div>
    </section>

  );
}

}

export default connect()(LandingPage)
