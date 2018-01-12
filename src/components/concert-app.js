import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import Spinner from 'react-spinkit';
import UserLocation from './UserLocation';
import ConcertDetails from './ConcertDetails';
import Home from './Home';
// import  HandleNoConcerts  from './noresults';
import  AboutPage  from './About-Page';
import Header from './Header';
import UserEventDetails from './usereventdetails';
import { AnimatedSwitch } from 'react-router-transition';

import './Concert-App.css';



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
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className='switch-wrapper'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/search' component={UserLocation} />
              <Route exact path='/search/concerts' component={ConcertDetails}/>
              <Route exact path='/event/:eventId' component={UserEventDetails} />
            </Switch>
          </AnimatedSwitch>
          {this.renderData()}
      </div>
          )
      
      }     
}

const mapStateToProps = function(state){
    return {
        concerts: state.concerts || [],
        loading: state.loading,
        error: state.error,
        isModalOpen: state.isModalOpen
    }
}

export default withRouter(connect(mapStateToProps)(ConcertApp))