import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name: ""
  }

  changeState = (events) => {
    this.setState({name: events.target.value})
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.name} onChange={this.changeState}></input>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default App;
