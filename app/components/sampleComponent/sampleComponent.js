import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment} from '../../redux/modules/counter'
require('./sampleComponent.scss');

@connect(state => ({ myCounter: state.countReducer.count }))
export default class SampleComponent extends Component {
    handleClick = (event) => {
        this.props.dispatch(increment())
    }
    render() {
        return (
          <div className="sample-container">
            <div className="sample-component">
              <h1>Spark says "cool man."</h1>
              <p>
                <i className="fa fa-check"></i>
                This is a sample component.
              </p>
              <p>
                { this.props.myCounter }
              </p>
              <button onClick={this.handleClick}>click me</button>
            </div>
          </div>
        );
    }
}
