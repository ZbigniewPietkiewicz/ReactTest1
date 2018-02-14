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
    return (
      <div className="App">
        {this.state.polls.map(item => (
          <div key={item.id}>
          {item.poll_text}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
