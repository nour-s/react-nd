import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Quiz extends Component {
  

constructor(){
  super();
  var values = {
      value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100)
  };
  var proposedAnswer = Math.floor(Math.random() * 3) + values.value1 + values.value2 + values.value3;
    this.state = {
      ...values,
	proposedAnswer,
    numQuestions: 0,
    numCorrect : 0
  };
}

componentDidMount(){

}

 checkAnswer = answer => {
  	var correct = answer === (this.state.proposedAnswer === this.state.value1 + this.state.value2 + this.state.value3);
     var values = {
      value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100)
  };
   
  var proposedAnswer = Math.floor(Math.random() * 3) + values.value1 + values.value2 + values.value3;
   
  	this.setState(prevState => {
      return {
      ...values,
	proposedAnswer,
      numCorrect : prevState.numCorrect +  (correct ? 1 : 0),
      numQuestions : prevState.numQuestions + 1
    };
    });
  
};

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
