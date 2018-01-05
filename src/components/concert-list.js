import React from 'react';
import { displayLanding } from '../actions/concerts';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Spinner from 'react-spinkit';
import UserLocation from './userinput';
import ConcertDetails from './concertdetails';
import LandingPage from './landingpage';
import  HandleNoConcerts  from './noresults';
import EventConfirmation from './custom-event-confirmation'



export class ConcertList extends React.Component {

  componentDidMount() {
    this.props.dispatch(displayLanding())
  }

    renderData(){

        if (this.props.loading) {
            return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
          }
          if (this.props.error) {
            return <p>{this.props.error}</p>
          }        
        }

        render() {
          if (this.props.landing) {
            return (
              <LandingPage />
            )
          } else {
          return (
            <Router>
               <div>
              <UserLocation/>
              {console.log(this.props.concerts)}
              <ConcertDetails />
              <Route exact path='/event/:id' component={EventConfirmation} />
              {this.renderData()}
            </div>
            </Router>
          )
        }  
      }     
}

const mapStateToProps = function(state){
    return {
        landing: state.landing,
        concerts: state.concerts || [],
        loading: state.loading,
        error: state.error,
        isModalOpen: state.isModalOpen
    }
}

export default connect(mapStateToProps)(ConcertList)