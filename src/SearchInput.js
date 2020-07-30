import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './SearchInput.css';

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="header">
        <div className="title">Tradeshift Global Search</div>
        <span className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
        <div className="search">
          <div className="search-place">
            <input placeholder="Please Select" />
          </div>
          <div className="component-search-input">
            <div>
              <input onChange={this.handleChange} />
              <span className="gel-icon-search"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
