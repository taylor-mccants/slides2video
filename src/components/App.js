import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowTo from "./HowTo";
import Footer from "./Footer";

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Header />
      <div className="flexContainer">
          <div className="flexHero">
              <Hero/>
          </div>
          <div className="flexHowTo">
              <HowTo/>
          </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
