import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendCreatorUpdate } from '../actions/event-updates';
import  Button  from './Button';
import FontAwesome from 'react-fontawesome';
import './UpdateCreator.css';

 class UpdateCreator extends Component {
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
        <p className='editor-creator'>Event Organizer 
          <input className='input-form' 
            type='text' 
            defaultValue={this.state.updatedCreator ? this.state.updatedCreator : this.props.creator} 
            ref="creator" /> 
        </p>
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
      <section id='user-event-creator'>
        Event Organizer
        <span> <button onClick={() => this.toggle()} ><FontAwesome name='fas fa-edit' /></button></span>
        <p 
          id='user-event-creator-name'><FontAwesome name='far fa-star'/> - {this.state.updatedCreator ? this.state.updatedCreator : this.props.creator} 
        </p>
      </section>
    )
  }
} 
}

const mapStateToProps = state => ({
    eventId: state.detailsReducer.eventDetails.id,
    creator: state.detailsReducer.eventDetails.creator,
    updatedName: state.updatesReducer.creatorUpdates
})

export default connect(mapStateToProps)(UpdateCreator);

