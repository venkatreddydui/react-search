import ts from '@tradeshift/tradeshift-ui';
import Clipboard from 'clipboard';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './Results.css';
import ResultRow from './ResultRow';

export default class Results extends PureComponent {
  static propTypes = {
    data: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard');
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  handleClose = () => {
    ts.ui.get('#example1').close();
  };

  render() {
    return (
      <div className="component-results">
        {this.props.data.map(data => (
          <ResultRow key={data.id} data={data} />
        ))}
      </div>
    );
  }
}
