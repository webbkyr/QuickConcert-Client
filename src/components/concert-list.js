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
handleSubmit(e) {
  e.preventDefault();
  this.props.dispatch(fetchConcerts());
}

    renderData(){

        if (this.props.loading) {
            return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
          }
          if (this.props.error) {
            return <p>{this.props.error}</p>
          }
          console.log('testing',this.props.concerts);
          const list = this.props.concerts.map((concert, index) => {
            console.log(this.props.concerts);
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
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' placeholder='New York' onChange={e => console.log(e.target.value)}/>
                    <input type='submit' value='Search'/>
                </form>
                {/* <button onClick={() => this.props.dispatch(fetchConcerts())}>Click</button>             */}
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