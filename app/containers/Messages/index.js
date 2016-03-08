import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addMessage, updateMessage} from 'actions/index'

const Message = React.createClass({
    render() {
        return(
        <div>
            { new Date(this.props.message.timestamp).toLocaleTimeString() }
            { ' - ' }
            { this.props.message.text }
        </div>
        )
    }
})

const MessageComponent = React.createClass({
    render() {
        var rows = [];
        this.props.messages.forEach(function(message, i ) {
            rows.push(<Message  key={i} message={message} />);
        })
        return (
            <div>
            {rows}
            </div>
        )
    }
})

const Messages = React.createClass(  {
    handleSubmit() {
        this.props.dispatch(addMessage())
    },

    handleChange(event) {
        this.props.dispatch(updateMessage(event.target.value))
    },

    render(){
        return(
                <div>
                <h1>Message Logger</h1>
                <MessageComponent messages={this.props.messageReducer.messages} />
                <input value={this.props.messageReducer.currentMessage} onChange={this.handleChange} type="text" />
                <button onClick={this.handleSubmit}>send</button>
                <p>{this.props.currentMessage}</p>
                </div>
        )
    }
})

export default connect(state => ({messageReducer: state.messageReducer}))(Messages);
