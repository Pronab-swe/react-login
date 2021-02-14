import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap css...
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



ReactDOM.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
