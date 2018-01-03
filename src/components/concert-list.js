import React from 'react';
import { fetchConcerts, displayLanding } from '../actions/concerts';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import UserLocation from './userinput';
import ConcertDetails from './concertdetails';
import LandingPage from './landingpage';

export class ConcertList extends React.Component{
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
          <ConcertDetails />
        
        }

        render() {
          let view;
          if (this.props.landing === true) {
            return (
              <LandingPage />
            )
          } else {
          return (
            <div>
              <UserLocation/>
              <ConcertDetails />
              {this.renderData()}
            </div>
          )
        }  
      }     
}

const mapStateToProps = function(state){
    return {
        landing: state.landing,
        concerts: state.concerts || [],
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(ConcertList)