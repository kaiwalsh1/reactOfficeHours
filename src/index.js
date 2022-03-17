// Import - basically require but for React/Front-end code
  // const react = require('react');

// Import from react allows us to use JSX syntax
import React from 'react';
// React DOM takes our app, and renders it to the page
// we only use reactDOM once and always in the index.js
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  // 2 parameters
  // 1- component you want to render
  <App />,
  // 2- where you want to render it
  document.getElementById('root')
);
