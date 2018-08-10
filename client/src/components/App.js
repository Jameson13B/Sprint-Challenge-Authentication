import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Signup from './Signup';
import Signin from './Signin';
import Jokes from './Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default App;
