import React from 'react';
import logo from './images/centerstone_logo.svg';
import './App.css';

import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
