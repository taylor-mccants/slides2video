import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';
import HowTo, {HowToContainer} from "./components/HowTo";

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display: "flex", flexDirection: "row"}}>
          <Hero/>
          <HowTo/>
      </div>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
