import React from 'react';
import { fetchConcerts } from '../actions/concerts';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

export class ConcertList extends React.Component{
    // componentDidMount(){
    //     this.props.dispatch(fetchConcerts());
    // }

    renderData(){
        if (this.props.loading) {
            return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
          }
          if (this.props.error) {
            return <p>{this.props.error}</p>
          }
          console.log('testing',this.props.concerts);
          const list = this.props.concerts.map((concert, index) => {
            console.log(concert);
            return (
              <li key={index}>{concert.name}</li>
            )
      
          });  
          return <ul className='concert-results'>{list}</ul>;
        
        }
      
        render() {
          return (
            <div>
              {this.renderData()}
                <form onSubmit={() => this.props.dispatch(fetchConcerts())}>
                    <a href="#" data-toggle="dropdown">List of Cities</a>
                    <div>
                        <button>Search</button>
                    </div>
                </form>            
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