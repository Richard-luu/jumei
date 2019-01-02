import React, { Component } from 'react';
import Home from '@/containers/Home';
import Center from '@/containers/Home/HomeCenter';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/center' component={Center}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
