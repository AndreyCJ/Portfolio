import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
document.querySelector('#root'));