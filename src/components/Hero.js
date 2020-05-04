import React, { Component } from "react";
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 2em;
  padding: 1em;
  min-height: 20em;
  background-color: #6d6e70;
  color: white;
`;

class Hero extends Component {

    render() {
        return (
            <HeroContainer>
                <h3>hero container</h3>
            </HeroContainer>
        )
    }
}

export default Hero;