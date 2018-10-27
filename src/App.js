import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;




class Quiz extends Component {
    state = {
    value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100),
    proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
    numQuestions,
    numCorrect
  };


 checkAnswer = answer => {
  	var correct = answer === (proposedAnswer === value1 + value2 + value3);
  	this.setState(prevState => {
      return {
      value1 : Math.floor(Math.random() * 100),
      value2 : Math.floor(Math.random() * 100),
      value3 : Math.floor(Math.random() * 100),
      proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
      numCorrect : prevState.numCorrect +  (correct ? 1 : 0),
      numQuestions : prevState.numQuestions + 1
    };
    });
  
};

constructor(){
  super();
}

render() {
  return (        
  		<div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick ={()=>this.checkAnswer(true)}>True</button>
          <button onClick ={()=>this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>);
}
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Quiz />
      </div>
    );
  }
}

export default App;
