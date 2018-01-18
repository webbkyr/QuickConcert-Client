import React from 'react';
import { withRouter } from 'react-router-dom';
import './UpdateCreator.css';
import { connect } from 'react-redux';
// import ProcessUpdates from './Process-Updates';
import { sendCreatorUpdate } from '../actions/event-updates';

 class UpdateCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: false,
      creator: this.props.creator,
      updatedCreator: null
    }
  }

//using local state for this component because re-rendering is being blocked
//for creator updates

  toggle() {
    this.setState({
      editor: !this.state.editor
    })
  }


  handleUpdate(value) {
    const creator = value;
    const creatorInfo = ({
      id: this.props.eventId,
      creator
    })
    this.props.dispatch(sendCreatorUpdate(creatorInfo))
    this.setState({
      editor: !this.state.editor,
      updatedCreator: this.refs.creator.value
    })

  }

render() {
  console.log('UpdatedName in state',this.state.updatedCreator)


  if (this.state.editor) {
    return (
    <div>
     <p 
      className='editor-creator'>Creator: 
      <input type='text' defaultValue={this.state.updatedCreator ? this.state.updatedCreator : this.props.creator} ref="creator" />
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
       <p onClick={() => this.toggle()} id='user-event-creator'>Creator: {this.state.updatedCreator ? this.state.updatedCreator : this.props.creator} <br/>
      </p>
    )
  }
} 
}

const mapStateToProps = state => {

  return {
    eventId: state.detailsReducer.eventDetails.id,
    creator: state.detailsReducer.eventDetails.creator,
    updatedName: state.updatesReducer.creatorUpdates
  }
}

export default connect(mapStateToProps)(UpdateCreator);

//removed withRouter from this component
