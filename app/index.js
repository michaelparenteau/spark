import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/app';
import reducers from 'reducers';

// global styles
import styles from './stylesheets/screen.scss';

// components
//import SampleComponent from './components/sampleComponent/sampleComponent';
require("font-awesome-loader");

const initialState = window.INITIAL_STATE || {messages: [], currentMessage: ""};
const store = createStore(reducers(initialState))

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>, document.getElementById('root'));
