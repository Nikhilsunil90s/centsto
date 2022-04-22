import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Applynow from './Applynow';
import Contact from './Contact';
import './index.css';
import LandingPage from './LandingPage';
import App from './LandingPage';
import reportWebVitals from './reportWebVitals';
import SBALoan from './SBALoan';
import About from './About';
import Solutions from './Solutions';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Apply' element={<Applynow />} />
        <Route path='/About' element={<About />} />
        <Route path='/Landing' element={<Solutions />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/sbaloan' element={<SBALoan />} />
     
      </Routes>
    </Router>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
