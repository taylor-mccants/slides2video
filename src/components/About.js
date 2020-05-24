import React, {Component} from "react";
import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 75%;
    display: inline-block;
    margin-bottom: 2em;
`;

class About extends Component {

  render() {
    return (
      <AboutContainer>
        <h1>More information</h1>
        <p>It all started in 2019 when we were looking for a way to educate students with all kinds of learning
        styles without having to spend hours recording and re-recording lectures each year. This app allows
        you to make slight edits to the slides or your script and with a click of a button you have a new,
                    ready-made lecture recording to share with your class!</p>
      </AboutContainer>
    );
  };
}

export default About;