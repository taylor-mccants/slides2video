import React, { Component } from "react";
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: inline-block;
  width: 100%;
  background-color: #1a0dab;
  color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-size: 10px;
`;

class Footer extends Component {

  render() {
    return (
      <FooterContainer>
        Slides2Video
      </FooterContainer>
    )
  }
}

export default Footer;