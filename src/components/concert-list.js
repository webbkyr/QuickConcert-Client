import React from 'react';
import { fetchConcerts } from '../actions/concerts';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

export class ConcertList extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchConcerts());
    }

    renderData(){
        if (this.props.loading) {
            return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
          }
          if (this.props.error) {
            return <p>{this.props.error}</p>
          }
      
          const list = this.props.concerts.map((concert, index) => {
            return (
              <li key={index}>{concert}</li>
            )
      
          });  
          return <ul className='concert-results'>{list}</ul>;
        
        }
      
      
        render() {
          return (
            <div>
              {this.renderData()}
              <button> Click Me!</button>
            </div>
          )
        }       
}

const mapStateToProps = function(state){
    return {
        concerts: state.concerts,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(ConcertList)