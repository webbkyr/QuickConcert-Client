import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './about-page.css';

export function AboutPage(props) {


  return (
    <section id="about" tabIndex="-1">
 
      <h2>What do I do?</h2>
      <p>This is a social event platform.</p>
      <div>
        This application is geared to quickly find concerts in a specified area.
        Once you find the concert you are looking for you can click share in order to create an event.
        An event is created and you are able to add attendees. Each attendee is able to easily choose whether
        or not they will be attending the event and ultimately can buy tickets to the event via an external 
        link they are able to hit.
      </div>
      <p>In a nutshell, this app is designed to quickly be able to see concerts in the area of your choosing and invite friends to the event you found.</p>
      <button onClick={() => <Link to='/'/> }> Go back</button>
    </section>
  );
}

// export const mapStateToProps = state => {
// return ({
//   about: state.about
//   })
// }

export default connect()(AboutPage)