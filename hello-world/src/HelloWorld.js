import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component{
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello',
                  phrase: 'this is major Tom.'
                };
    this.frenchify = this.frenchify.bind(this)
  }

  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name} {this.state.phrase}!
        <br/>
        <button onClick={this.frenchify}>Frenchify</button>
      </div>
    );
  }
};


export default HelloWorld;
