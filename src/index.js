import React from 'react';
import ReactDOM from 'react-dom';
import './_base.scss';
import App from './App';
import {Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import store from './Redux/store';

import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}> 

  <Router> 
    <App />
    </Router>
    </Provider>
 ,
  document.getElementById('root')
);
