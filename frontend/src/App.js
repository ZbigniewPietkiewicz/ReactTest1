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
        {this.state.polls.map(poll => (
          <div>
          <div className="row" key={poll.id}>
            <div className="col s10 offset-s1">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{poll.poll_text}</span>
                  <p>{poll.pub_date}</p>
                </div>
                <div className="card-action"> 
                  <button type="button" className="waves-effect waves-light btn">Open</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  }
}


export default App;
