import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

function App({ children })  {
    return (
            <div>
            <header>
            Links: { ' -> ' }
            <Link to="/">Home</Link>
            { ' '}
            <Link to="/sample-component">Sample Component</Link>
            { ' ' }
            <Link to="/form-component">Form Component</Link>
            { ' ' }
        </header>
            <div>
            </div>
            <div>{children}</div>
            </div>
    );}

export default App;
