import React, { PureComponent } from 'react';
import './Header.css';
import logo from './logo.svg';
export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img src={logo} width="70" height="70" alt="" />
        Tradeshift Search
      </header>
    );
  }
}
