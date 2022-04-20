import React from 'react';
import ReactDOM from 'react-dom/client';
import Applynow from './Applynow';
import Header from './Header/Header';
import './index.css';
import LandingPage from './LandingPage';
import App from './LandingPage';
import reportWebVitals from './reportWebVitals';
import SBALoan from './SBALoan';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <SBALoan />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
