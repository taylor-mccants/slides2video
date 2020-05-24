import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import DropBox from "./DropBox";
import { submitSlides } from "../api"

export const HowToContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 1.5em;
  padding: 1em;
  color: black;
  justify-items: center;
`;

const ColorButton = withStyles((theme) => ({
  root: {
    width: 'fit-content',
    color: '#ffffff',
    backgroundColor: '#1a0dab',
    '&:hover': {
      backgroundColor: '#435cab',
    },
  },
}))(Button);

class HowTo extends Component {
  state = {
    files: []
  };

  handleDrop = (files) => {
    let fileList = [];
    for (let i = 0; i < files.length; i++) {
      fileList.push(files[i]);
    }
    this.setState({ files: fileList })
  };

  handleSubmit = () => {
    const formData = new FormData()
    for (const f of this.state.files) {
      formData.append('files', f)
    }
    submitSlides(formData);
  }

  render() {
    return (
      <HowToContainer>
        <h2>Try it now!</h2>
        <div>
          1. Create slides <br />
                    2. Add speaker notes to each slide<br />
                    3. Upload powerpoint file<br />
                    4. Download your video!<br />
        </div>
        <DropBox handleDrop={this.handleDrop} files={this.state.files} />
        <ColorButton disabled={!this.state.files.length > 0} variant="contained"
          onClick={this.handleSubmit}>
          Create Video
                </ColorButton>
      </HowToContainer>
    );
  }
}

export default HowTo;