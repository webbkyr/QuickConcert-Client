import React from 'react';
import { displayLanding } from '../actions/concerts';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import Spinner from 'react-spinkit';
import UserLocation from './userinput';
import ConcertDetails from './concertdetails';
import LandingPage from './landingpage';
import  HandleNoConcerts  from './noresults';
import EventConfirmation from './custom-event-confirmation'
import  AboutPage  from './about-page';



export class ConcertApp extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(displayLanding())
  // }

    renderData(){

        if (this.props.loading) {
            return <Spinner name="line-scale-pulse-out" color="red" fadeIn='none'/>
          }
          if (this.props.error) {
            return <p>{this.props.error}</p>
          }        
        }

        render() {
      
          return (
            <div>
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/search' component={UserLocation} />
              <ConcertDetails />
              {this.renderData()}
            </div>
          )
      
      }     
}
//Switch
//Link to=
//<Route exact path='/' component={landingPage}
//<Route exact path='/search' component={userLocation}
const mapStateToProps = function(state){
    return {
        landing: state.landing,
        concerts: state.concerts || [],
        loading: state.loading,
        error: state.error,
        isModalOpen: state.isModalOpen
    }
}

export default withRouter(connect(mapStateToProps)(ConcertApp))