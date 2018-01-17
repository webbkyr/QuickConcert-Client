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
      isUpdated: false,
      name: this.props.updatedName
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
      editor: true
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
      editor: false
    })
    console.log(this.refs.creator.value);
    // document.getElementById('user-event-creator').innerText = this.refs.creator.value;
    window.location.reload();
  }

render() {
  console.log('UpdateCreator props', this.props)
  console.log(this.props.match.params)
  console.log('Updated Name', this.props.updatedName)

  if (this.state.editor) {
    console.log(this.props)
    return (
    <div>
     <p className='editor-creator'>Creator: <input type='text' defaultValue={this.props.name} ref="creator" /></p>
     <button type='button' onClick={() => this.handleUpdate(this.refs.creator.value)}>Submit</button>
    </div>
      )
  } else {
      return (
       <p onClick={() => this.toggle()} id='user-event-creator'>Creator: {this.props.name} <br/>
       {this.state.updatedName}
      </p>
    )
  }
} 
}


//commenting this out until a better fix can be tested
const mapStateToProps = props => {
  return {
    currentName: props.detailsReducer.eventDetails.creator,
    updatedName: props.updatesReducer.creatorUpdates
  }
}

export default withRouter(connect(mapStateToProps)(UpdateCreator));