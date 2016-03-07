import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActionCreators from 'actions';

class MessageList extends Component {
  render() {
    return (
      <ol className='message-list'>
        {this.props.messages.map((message, index) => {
          return (
            <li key={`message-${index}`}>
              {message.text}
            </li>
          );
        })}
      </ol>
    );
  }
}

class MessageEntryBox extends Component {
  render() {
    return (
      <div className='message-entry-box'>
        <textarea
          name='message'
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }

  handleChange(ev) {
    this.props.onChange(ev.target.value);
  }

  handleKeyPress(ev) {
    if (ev.which === 13) {
      this.props.onSubmit();
      ev.preventDefault();
    }
  }
}

class App extends Component {
    render() {
        return (
                <div className="chat-window">
                <h1>Message Log: </h1>
                <MessageList messages={this.props.messages}/>
                <MessageEntryBox value={this.props.currentMessage} onChange={this.props.updateMessage} onSubmit={this.props.addMessage}/>
                </div>
        );}}


function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentMessage: state.currentMessage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
