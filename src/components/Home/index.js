import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tabbar from '@/components/Tabbar';
import {Provider} from 'react-redux';
import store from '@/redux/store';

// 引入组件
import HomeFilms from './HomeFilms';
import HomeCinemas from './HomeCinemas';
import HomeCenter from './HomeCenter';
import HomeTodo from './HomeTodo';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTabs: [
        { key: 'films', href: "/films", icon: "icon-films", name: '电影' },
        { key: 'cinemas', href: "/cinemas", icon: "icon-cinemas", name: '影院' },
        { key: 'todo', href: "/todo", icon: "icon-sales", name: 'Todo' },
        { key: 'center', href: "/center", icon: "icon-center", name: '我的' }
      ]
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Switch>
            <Route path="/films" component={HomeFilms}></Route>
            <Route path="/cinemas" component={HomeCinemas}></Route>
            <Route path="/todo" component={HomeTodo}></Route>
            <Route path='/center' component={HomeCenter}></Route>
            <Redirect to="/films"></Redirect>
          </Switch>
          <Tabbar tabs={this.state.myTabs}></Tabbar>
        </Fragment>
      </Provider>
    )
  }
}
