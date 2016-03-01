import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from 'react-fa';

require('./sampleComponent.scss');

export default class SampleComponent extends Component {
  render() {
    return (
      <div className="sample-container">
        <div className="sample-component">
          <h1>Spark says hello.</h1>
          <p>
            <Icon name="check" />&nbsp;
            This is a sample component.
          </p>
        </div>
      </div>
    );
  }
}
