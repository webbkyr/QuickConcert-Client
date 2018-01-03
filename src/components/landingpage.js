import React from 'react';
import { connect } from 'react-redux';
import './landingpage.css';


export class LandingPage extends React.Component {

  render() {
  return (
    <section id='landing'>
      <h1>quick concert</h1>
      <p>Looking for a live concert?</p>
      <p>Let's get started!</p>
    </section>

  );
}

}

export default connect()(LandingPage)