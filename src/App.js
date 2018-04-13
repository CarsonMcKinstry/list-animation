import React, { Component } from 'react';
import './App.pcss';

import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header"/>
        <Cards/>
      </div>
    );
  }
}

export default App;