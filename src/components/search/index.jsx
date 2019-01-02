import React, { Component } from 'react';
import './index.less';

export default class Search extends Component {
  constructor(props) {
    super(props);
  this.search = this.search.bind(this);
  this.back = this.search.bind(this);
  }

  search (e) {
    e.preventDefault();
    // this.props.history.push('/search');
  }

  back (e) {
    e.preventDefault();
    // this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <header>
          <a href="www.baidu.com" className="back" onClick={this.back}>
            <img src={require(`./images/1.png`)} alt=""></img>
          </a>
          <div className="search-head">
            <img src={require(`./images/2.png`)} alt=""></img>
            <input placeholder="搜索商品名称、品牌、功效"></input>
          </div>
          <a href="www.baidu.com" className="search_btn" onClick={this.search}>搜索</a>
        </header>

        <ul className="history">
          <li className="history-li">
            <a href="www.baidu.com"  onClick={this.back}>
              <img src={require(`./images/2.png`)} alt=""></img>
              香奈儿口红666
            </a>
            <span></span>
          </li>
          <li className="history-li">
            <a href="www.baidu.com"  onClick={this.back}>
              <img src={require(`./images/2.png`)} alt=""></img>
              香奈儿口红666
            </a>
            <span></span>
          </li>
          <li className="history-li">
            <a href="www.baidu.com"  onClick={this.back}>
              <img src={require(`./images/2.png`)} alt=""></img>
              香奈儿口红666
            </a>
            <span></span>
          </li>
        </ul>
      </div>
    )
  }
}
