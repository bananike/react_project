import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();