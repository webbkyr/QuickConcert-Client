import React from 'react';
import { connect } from 'react-redux';
import BeginConcertSearch from './begin';
import InfoSection from './about-page';
import './landingpage.css';


export class LandingPage extends React.Component {
 

  render() {
    let titleText = <h1>quick concert</h1>
     
  return (
    <section id='landing'>
      <a className="what" href="./about-page.js">About</a>
      { this.props.about && <InfoSection /> }
      {/* <InfoSection /> */}
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
