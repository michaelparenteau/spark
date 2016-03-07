import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../components/contactForm';

@connect(state => ({form: state.form}))
class contactFormContainer extends React.Component {

    handleSubmit(data) {
      this.props.dispatch({type:'savedForm', data})
    }

    render() {
        var form = this.props.form;
        var formData;
        if (form) {
            formData = form.simple;
        }
        return (
                <div id="app">
                <h1>Simple Form</h1>
                <ContactForm onSubmit={this.handleSubmit.bind(this)}/>
                <h2>App State</h2>
                <b>First Name: </b>
                {(formData && formData.firstName ?
                  formData.firstName.value : null)}
                <br />
                <b>Last Name:</b>
                {(formData && formData.lastName ?
                  formData.lastName.value : null)}
            </div>
        );
    }
}

export default contactFormContainer;
