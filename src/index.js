import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';


ReactDOM.render(
    <Router> {/* Implementation of Browser Router to redirect to different routes. */}
      <App />  
    </Router>, 
    document.getElementById('root'));