import React, { Component } from "react";
import styled from "styled-components";
import slides2vid from "../assets/images/slides2videohero.svg";

class Hero extends Component {

  render() {
    return (
      <div>
        <img style={{ marginTop: 15, maxWidth: "85%", minWidth: "400px"}} src={slides2vid} height={"auto"} />
      </div>
    )
  }
}

export default Hero;