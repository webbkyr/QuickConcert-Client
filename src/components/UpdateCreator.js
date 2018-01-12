import React from 'react';
import './UpdateCreator.css';
import { connect } from 'react-redux';

export class UpdateCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: false,
      value: this.props.name
    }
  }

  toggle() {
    this.setState({
      editor: !this.state.editor
    })
  }

  onChange(input) {
    this.setState({
      value: input
    })
  }

  handleUpdate(input) {
    //write an async action that updates the name of the creator
    this.props.dispatch()
  }

render() {
  if (this.state.editor) {
    return (
    <div>
     <p className='editor-creator'>Creator: <input type='text' onChange={input => this.onChange(input)}value={this.props.name} /></p>
     <button>Submit</button>
    </div>
      )
  } else {
      return (
       <p onClick={() => this.toggle()} id='user-event-creator'>Creator: {this.props.name}
      </p>
    )
  }
}
  
  
}

export default connect()(UpdateCreator)