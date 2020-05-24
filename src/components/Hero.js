import React, { Component } from "react";
import styled from "styled-components";
import slides2vid from "../assets/images/slides2videohero.svg";

class Hero extends Component {

  render() {
    return (
      <div style={{ padding: '3em' }}>
        <h2 style={{ marginTop: -10 }}>Easily convert your powerpoint slides into lecture videos!</h2>
        <img style={{ marginTop: 15 }} src={slides2vid} height={"85%"} width={"85%"} />
      </div>
    )
  }
}

export default Hero;