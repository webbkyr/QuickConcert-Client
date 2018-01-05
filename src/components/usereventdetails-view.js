import React from 'react';
import { connect } from 'react-redux';
import './usereventdetails-view.css';
import { fetchLinkSuccess } from '../actions/eventlinks';

// { __v: 0,
//   eventName: 'Thrillkiller',
//   creator: 'Kim',
//   _id: 5a4f7d804db91b62428166ff,
//   attendees: [ { attendee: 'Kim', _id: 5a4f7d804db91b6242816700 } ] }


export class UserEventDetailsView extends React.Component {
componentDidMount() {
  this.props.dispatch(fetchLinkRequest(id))
}


renderDetails() {

  if (this.props.loading) {
    return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
  }
  if (this.props.error) {
    return <p>{this.props.error}</p>
  }  
}

  render() {
    return (    
      <div>
        <UserEventDetails />
        {this.renderDetails}
      </div>
  
  
    )
  }
}




}

export const mapStateToProps = state => {
  return {
    eventLink: state.eventLink
  }
}

export default connect(mapStateToProps)(UserEventDetailsView)