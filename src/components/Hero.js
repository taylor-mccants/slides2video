import React, {Component} from "react";
import styled from "styled-components";
import slides2vid from "../assets/images/slides2videohero.svg";

export const HeroContainer = styled.div`
  margin: 3em;
`;

class Hero extends Component {

  render() {
    return (
      <HeroContainer>
        <h2>Easy way to turn powerpoint slides into lecture videos</h2>
        <img src={slides2vid} height={"85%"} width={"85%"} />
      </HeroContainer>
    )
  }
}

export default Hero;