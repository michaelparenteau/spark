import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import sampleComponent from './components/sampleComponent/sampleComponent';
import contactFormContainer from './containers/contactForm';

const HomeComponent = () => (<div>
                    <h3>Welcome to Spark.</h3>
                    <p>This is a basic component</p>
                   </div>)

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomeComponent}/>
    <Route path="sample-component" component={sampleComponent} />
    <Route path="form-component" component={contactFormContainer} />
  </Route>
);
