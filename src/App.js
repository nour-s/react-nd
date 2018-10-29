import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text:"This should mirror the text you typed into the input field."
  }
  
constructor (){
  super();
  
}

textChanged = evnt=>
{
	this.setState({text : evnt.target.value});
};
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" onChange={this.textChanged} placeholder="Say Something" />
          <p className="echo">Echo:</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
