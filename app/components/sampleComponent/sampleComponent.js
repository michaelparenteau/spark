import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment} from 'counter'

require('./sampleComponent.scss');

@connect(state => ({ myCounter: state.countReducer.count }))
export default class SampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {localCounter: 0}
    }
    handleClick = (event) => {
        this.props.dispatch(increment())
        this.setState({localCounter: this.state.localCounter + 2})
    }
    render() {
return (
<div className="sample-container">
  <div className="sample-component">
    <h1>Sample Counter</h1>
    <p>
      <i className="fa fa-check"></i>
      This is a sample component.
    </p>
    <p>
        {'Counter in Redux: '}
      { this.props.myCounter }
<br /><br />
    {'Local State counter: '}
    { this.state.localCounter }
    </p>
    <button onClick={this.handleClick}>click me</button>
  </div>
</div>
);
}
}
