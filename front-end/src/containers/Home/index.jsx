import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tabbar from '@/components/Tabbar/index.jsx';
import {Provider} from 'react-redux';
import store from '@/redux/store';

// 引入组件
import Shouye from './HomeShouye';
import Tuan from './HomeTuan';
import Shop from './HomeShop';
// import Center from './HomeCenter';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTabs: [
        { key: 'home', href: "/shouye", icon: "icon-shouye", name: '首页' },
        { key: 'tuan', href: "/tuan", icon: "icon-ziyuan", name: '拼团' },
        { key: 'shop', href: "/shop", icon: "icon-shoppingbag", name: '购物车' },
        { key: 'center', href: "/center", icon: "icon-wode", name: '我的' }
      ]
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Switch>
            <Route path="/shouye" component={Shouye}></Route>
            <Route path="/tuan" component={Tuan}></Route>
            <Route path="/shop" component={Shop}></Route>
            {/* <Route path='/center' component={Center}></Route> */}
            <Redirect to="/shouye"></Redirect>
          </Switch>
          <Tabbar tabs={this.state.myTabs}></Tabbar>
        </Fragment>
      </Provider>
    )
  }
}
