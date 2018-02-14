import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    polls: []
  }
  async componentDidMount(){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/');
      const polls = await res.json();
      this.setState({
        polls
      });
    }catch(e)
    {
      console.log(e);
    }
  }
  render() {
    console.log(this.state.polls)
    return (    
      <div className="App">
        {this.state.polls.map(poll => (
          <div key={poll.id}>
          {poll.poll_text}
          {poll.questions.map(question =>(
            <div key ={question.id}>
            {question.question_text}
            {question.choices.map(choice=>(
              <div key ={choice.id}>
              {choice.choice_text}
              </div>
            ))}
            </div>
          ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
