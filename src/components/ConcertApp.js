import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import Spinner from 'react-spinkit';
import UserLocation from './UserLocation';
import ConcertDetails from './Concert-Details';
import Home from './Home';
import AboutPage from './AboutPage';
import Header from './Header';
import UserEventDetails from './usereventdetails';

import './ConcertApp.css';


export class ConcertApp extends React.Component {


  renderData(){

    if (this.props.loading) {
      return <Spinner id='spinner' name="line-scale-pulse-out" color="red" fadeIn='none'/>

        }
    if (this.props.error) {
       return <p>{this.props.error}</p>
          }        
        }

    render() {
      
      return (
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/search' component={UserLocation} />
              <Route exact path='/search/concerts' component={ConcertDetails}/>
              <Route exact path='/event/:eventId' component={UserEventDetails} />
            </Switch>
          {this.renderData()}
      </div>
          )
      
      }     
}

const mapStateToProps = state => {
    return {
        loading: state.concertsReducer.loading,
        error: state.concertsReducer.error,
    }
}

export default withRouter(connect(mapStateToProps)(ConcertApp))