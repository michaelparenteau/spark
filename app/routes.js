import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import sampleComponent from 'components/sampleComponent/sampleComponent';
import contactFormContainer from 'containers/contactForm';
import HomeComponent from 'components/Home'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomeComponent}/>
    <Route path="sample-component" component={sampleComponent} />
    <Route path="form-component" component={contactFormContainer} />
  </Route>
);
