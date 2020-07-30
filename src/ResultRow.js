import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './ResultRow.css';

export default class Result extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  };

  handleClick = () => {
    const id = '#company-details' + this.props.data.id;
    window.ts.ui.get(id).open();
  };

  handleClose = () => {
    window.ts.ui.get('#exampleMicro').close();
  };

  render() {
    const id = 'company-details' + this.props.data.id;

    return (
      <div>
        <button type="button" data-ts-type="button" onClick={this.handleClick}>
          <span className="title">{this.props.data.name}</span>
          <span className="address">{this.props.data.address}</span>
        </button>
        <dialog data-ts="Modal" id={id}>
          <div data-ts="Panel">
            <div className="title">Compnay Information</div>
            <article data-ts="Box">
              <div className="header"> {this.props.data.name}</div>
              <div className="element"> Company status: {this.props.data.status}</div>
              <div className="header">Compnay Registration Number</div>
              <div className="element">{this.props.data.registrationNumber}</div>
              <div className="header">VAT Number</div>
              <div className="element">{this.props.data.vatNumber}</div>
              <div className="header">REGISTERED ADDRESS</div>
              <div className="element">{this.props.data.address}</div>
              <div className="header">COUNTRY</div>
              <div className="element">{this.props.data.country}</div>
              <div className="header">ADDITIONAL STATUS DETAILS</div>
              <div className="element">{this.props.data.additionalStatusDetails}</div>
              <div className="header">COMPANY DESCRIPTION</div>
              <div className="element">{this.props.data.description}</div>
              <button onClick={this.handleClose} className="ts-primary">
                <span>Close the Modal</span>
              </button>
            </article>
          </div>
        </dialog>
      </div>
    );
  }
}
