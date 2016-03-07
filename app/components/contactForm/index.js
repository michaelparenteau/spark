import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

@reduxForm({
    form:'simple',
    fields:['firstName', 'lastName'],
    destroyOnUnmount: false
})

export default class ContactForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { fields: {firstName, lastName}, handleSubmit } = this.props;
    return (

<form onSubmit={handleSubmit}>
        <div>

          <div>
            <label>First Name: </label>
  <input type="text" placeholder="First Name" {...firstName}/>

          </div>
            <div>
            <label>Last Name: </label>
          <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
       <div>
      </div>
     </form>

    );
  }
}
