import React, { Component } from "react";
import styled from "styled-components";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #1a0dab;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.25em;
  text-align: left;
  margin: 1em;
`;

export const MenuContainer = styled.div`
    text-align: right;
`;

class Header extends Component {

    render() {
        return (
            <HeaderContainer>
                <Title>
                    Slides2Video
                    <PlayArrowIcon/>
                </Title>
                <MenuContainer>
                </MenuContainer>
            </HeaderContainer>
        )
    }
}

export default Header;