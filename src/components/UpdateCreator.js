import React from 'react';
import { withRouter } from 'react-router-dom';
import './UpdateCreator.css';
import { connect } from 'react-redux';
import { sendCreatorUpdate } from '../actions/event-updates';

 class UpdateCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: false,
      creator: this.props.creator
    }
  }

  //once the store changes, re-render the component to update

// shouldComponentUpdate() {
//   if (this.state.isUpdated) {
//     return true;
//   } else {
//     return false;
//   }
//   //set condition if state.editor changes then return true
//   //else return false CAN ONLY RETURN A BOOLEAN VALUE
//   //IF true the component will re-render
// }

  toggle() {
    this.setState({
      editor: !this.state.editor
    })
  }


  handleUpdate(value) {
    const creator = value;
    const creatorInfo = ({
      id: this.props.match.params.eventId,
      creator
    })
    this.props.dispatch(sendCreatorUpdate(creatorInfo))
    this.setState({
      editor: !this.state.editor,
      creator: this.refs.creator.value
    })
    console.log('Creator Update Value', this.refs.creator.value);
  }

render() {


  if (this.state.editor) {
    return (
    <div>
     <p 
      className='editor-creator'>Creator: 
      <input type='text' defaultValue={this.props.creator} ref="creator" />
    </p>
     <button 
      type='button' 
      onClick={() => this.handleUpdate(this.refs.creator.value)}>Submit
    </button>
      <button
        type='button'
        onClick={() => this.toggle()}>Close
      </button>
    </div>
      )
  } else {
      return (
       <p onClick={() => this.toggle()} id='user-event-creator'>Creator: {this.state.creator} <br/>
      </p>
    )
  }
} 
}


//commenting this out until a better fix can be tested
const mapStateToProps = props => {
  // console.log('UpdatedName in mapd2p', props.updatesReducer.creatorUpdates.creator)
  return {
    creator: props.detailsReducer.eventDetails.creator,
    // updatedName: props.updatesReducer.creatorUpdates.creator
  }
}

export default withRouter(connect(mapStateToProps)(UpdateCreator));