import React, { Component } from 'react';
import Home from '@/containers/Home';
import City from '@/containers/City';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/city' component={City}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
