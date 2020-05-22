import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/images/slides2video_logo.png";

export const HeaderContainer = styled.div`
  display: inline-block;
  width: 100%;
  background-color: #1a0dab;
  color: white;
  height: 4em;
`;

export const LogoContainer = styled.div`
    text-align: left;
    margin-left: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`;

export const MenuContainer = styled.div`
    text-align: right;
`;

class Header extends Component {

  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <img src={logo} width={'15%'} />
        </LogoContainer>
        <MenuContainer>
        </MenuContainer>
      </HeaderContainer>
    )
  }
}

export default Header;