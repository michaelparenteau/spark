import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes';
import DevTools from './containers/DevTools';
import configureStore from './store'
// global styles
import styles from './stylesheets/screen.scss';
// font-awesome
require("font-awesome-loader");

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const injectDevTools = () => {
    if (__DEV__){
    return(
        <DevTools />
    )}
    return null;
}

var root = document.getElementById('root');
ReactDOM.render(
        <Provider store={store}>
        <div>
          <Router history={history}>
            { Routes }
          </Router>
        { injectDevTools() }
        </div>
        </Provider>, root);
