import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import HowTo from "./HowTo";

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Hero />
        <HowTo />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
