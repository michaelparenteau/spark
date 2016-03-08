import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import ValidationForm from 'components/ValidationForm';

class ValidationFormContainer extends Component {
    handleSubmit() {
    }
    render() {
        return(
            <div className="sample-container">
              <div className="sample-component">
                <ValidationForm onSubmit={this.handleSubmit}/>
              </div>
            </div>
        )
    }
}

export default ValidationFormContainer;
