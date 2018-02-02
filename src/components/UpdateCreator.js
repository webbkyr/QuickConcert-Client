import React from 'react';
import { connect } from 'react-redux';
import { sendCreatorUpdate } from '../actions/event-updates';
import  Button  from './Button';
import './UpdateCreator.css';

 class UpdateCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: false,
      creator: this.props.creator,
      updatedCreator: null
    }
  }

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
  if (this.state.editor) {
    return (
      <div>
        <p className='editor-creator'>Creator: 
          <input className='input-form' 
            type='text' 
            defaultValue={this.state.updatedCreator ? this.state.updatedCreator : this.props.creator} 
            ref="creator" /> 
        </p>
        <span>(click to edit)</span>
        <Button 
          id='submit-creator-u' 
          buttonText='Submit' 
          onClick={() => this.handleUpdate(this.refs.creator.value)} />
        <Button 
          id='close-creator-b' 
          buttonText='Close' 
          onClick={() => this.toggle()} />
      </div>
    )
  } else {
      return (
       <p 
        onClick={() => this.toggle()} 
        id='user-event-creator'>Creator: {this.state.updatedCreator ? this.state.updatedCreator : this.props.creator} 
      </p>
    )
  }
} 
}
//update to immediately return object
const mapStateToProps = state => {
  return {
    eventId: state.detailsReducer.eventDetails.id,
    creator: state.detailsReducer.eventDetails.creator,
    updatedName: state.updatesReducer.creatorUpdates
  }
}

export default connect(mapStateToProps)(UpdateCreator);

