import React, { Component } from 'react';

require('./sampleComponent.scss');

export default class SampleComponent extends Component {
  render() {
    return (
      <div className="sample-component">
        <h1>Spark says hello.</h1>
        <p>This is a sample component.</p>
      </div>
    );
  }
}
