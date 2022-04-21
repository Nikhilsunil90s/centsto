import React from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Solutions from './components/Solutions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <About/>
      <Solutions/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
