import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import HowTo from "./HowTo";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Header />
      <Grid container>
        <Grid item lg={6} md={6} sm={12}>
          <Hero />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <HowTo />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
