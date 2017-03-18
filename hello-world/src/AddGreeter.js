import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component{
  constructor(props){
    super(props);
    this.state = { greetingName: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addBreeps = this.addBreeps.bind(this);
}

  addBreeps() {
    this.props.addBreeps(this.state.greetingName);
    this.setState({ greetingName: '' });
  };

  handleUpdate() {
    this.setState({ greetingName: event.target.value });
  };

  render() {
    return(
      <div className='AddGreeter'>
        <input
        type='text'
        onChange={this.handleUpdate}
        value={this.state.greetingName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addBreeps}>Add</button>
      </div>
    );
  }
};

export default AddGreeter;
