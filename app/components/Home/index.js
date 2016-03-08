import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect(state => state)
class Home extends Component {
    render() {
        return(
<div className="sample-container">
  <div className="sample-component">
    <h3>Welcome to Spark.</h3>
    <p>This is a basic component wired up to the data store.</p>
    <p>Here is some read-only app state:</p>
    {JSON.stringify(this.props.countReducer)}
    <br />
    {JSON.stringify(this.props.form.simple)}
  </div>
</div>)}}

export default Home;
