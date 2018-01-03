import React from 'react';
import { fetchConcerts } from '../actions/concerts';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

export class ConcertList extends React.Component{
    // componentWillMount(){
    //     this.props.dispatch(fetchConcerts());
    // }

 ///method to grab the value of the input and update the store
 //sending in userInput to fetchConcerts   
handleSubmit(e, location) {
  e.preventDefault();
  // const { startDateTime, endDateTime } = getConcertDates;
  this.props.dispatch(fetchConcerts(location));
}
    renderData(){

        if (this.props.loading) {
            return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
          }
          if (this.props.error) {
            return <p>{this.props.error}</p>
          }
          const list = this.props.concerts.map((concert, index) => {
            console.log(this.props.concerts);
            return (
              <li key={index}>
              <div>{concert.name}</div>
              <div>{concert.classifications[0].genre.name}</div>
              <div>{concert.dates.start.localDate}</div>
              <div>{concert.dates.start.localTime}</div>
              <div><a target='_blank' href={concert.url}><button>Buy Tickets</button></a></div>
              </li>
            )
      
          });  
          console.log(list);
          return <ul className='concert-results'>{list}</ul>;
        
        }

        render() {
          return (
            <div>
              {this.renderData()}
                <form onSubmit={(e) => this.handleSubmit(e, 'madison')}>
                    <input type='text' placeholder='New York'/>
                    <input type='submit' value='Search'/>
                </form>
                {/* <button onClick={() => this.props.dispatch(fetchConcerts())}>Click</button>             */}
            </div>
          )
        }       
}

const mapStateToProps = function(state){
    return {
        concerts: state.concerts || [],
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(ConcertList)