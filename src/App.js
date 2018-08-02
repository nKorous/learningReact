import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <h1 className='firstHeaderClass'>This div has been clicked {this.props.clicks} times.</h1>
      </div>
    );
  }
}

export default App;
