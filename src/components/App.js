import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowTo from "./HowTo";

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
    </div>
  );
}

export default App;
