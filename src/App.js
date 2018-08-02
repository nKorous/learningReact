import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <button className='firstHeaderClass' onClick={this.props.onClick}>
          <h1>This button has been clicked {this.props.clicks} times.</h1>
        </button>
      </div>
    );
  }
}

export default App;
