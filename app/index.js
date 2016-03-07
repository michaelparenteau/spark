import React from 'react';
import ReactDOM from 'react-dom';

// global styles
import styles from './stylesheets/screen.scss';

// components
import SampleComponent from './components/sampleComponent/sampleComponent';
require("font-awesome-loader");


ReactDOM.render(<SampleComponent />, document.getElementById('root'));
