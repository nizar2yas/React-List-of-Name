import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize-css';
import App from './components/App.js';
import { HashRouter } from 'react-router-dom';
import PERSONS from './Data/Data.js';

ReactDOM.render(
    <HashRouter>
        <App persons={PERSONS} />
    </HashRouter>,
    document.getElementById('root'));
