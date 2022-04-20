import React from 'react';
import logo from './images/centerstone_logo.svg';
import './App.css';

import Footer from './components/Footer';
import About from './components/About';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <Solutions/>
      <Footer/>
    </div>
  );
}

export default App;
