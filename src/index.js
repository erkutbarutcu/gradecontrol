import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './route/AppRouter';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap'
import 'jquery';
import 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from 'react-redux';
import configureStore from '../src/redux/configureStore';


import reportWebVitals from './other/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
