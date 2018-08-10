import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dad Jokes</h1>
        <Route path='/signup' component={Signup} />
      </div>
    );
  }
}

export default App;
