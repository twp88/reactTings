import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class  HelloWorldList extends Component{
  constructor(props){
    super(props);
    this.state = { greetings: name= ['Jim', 'BeepBoops', 'FreemFrooms'] };
    this.addBreeps = this.addBreeps.bind(this);
  }

  addBreeps(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name} />
      ));
    }

  render() {
    return(
      <div className='HelloWorldList'>
        <AddGreeter addBreeps={this.addBreeps}/>
        {this.renderGreetings()}
      </div>
      );
    }
  };

export default HelloWorldList;
