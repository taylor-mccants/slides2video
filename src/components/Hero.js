import React, { Component } from "react";
import styled from "styled-components";
import slides2vid from "../assets/images/slides2vid_whitefill_img.png";

export const HeroContainer = styled.div`
  display: inline-block;
  width: 50%;
  margin: 3em;
`;

class Hero extends Component {

  render() {
    return (
      <HeroContainer>
        <img src={slides2vid} height={"85%"} width={"85%"} />
      </HeroContainer>
    )
  }
}

export default Hero;