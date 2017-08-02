import React, { Component } from 'react';
import Interface from './components/Interface';
import './App.css';

class App extends Component {

  render() {
    return (
        <Interface height={this.props.height} />
    );
  }
}

export default App;
