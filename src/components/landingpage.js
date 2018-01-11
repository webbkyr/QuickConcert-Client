import React from 'react';
import { connect } from 'react-redux';
import BeginConcertSearch from './begin';
import InfoSection from './about-page';
import { aboutPage } from '../actions/concerts';
import './landingpage.css';

//<Link to="/about">About</Link>

export class LandingPage extends React.Component {
 

  render() {
    let titleText = <h1>quick concert</h1>
     
  return (
    <section id='landing'>
      <a href='#' onClick={() => this.props.dispatch(aboutPage())}>About</a>
      { this.props.about && <InfoSection /> }
      <div>
        {titleText}
        <BeginConcertSearch />
      </div>
    </section>

  );
}

}

// comeback to this later
const mapStateToProps = state => {
  return {
    about: state.about
  }
}
export default connect(mapStateToProps)(LandingPage)
