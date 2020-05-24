import React, { Component } from "react";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import FileList from "./FileList";
import { InputBase } from '@material-ui/core';

export const ShadowBox = styled.div`
   width: 100%;
   height: 180px;
   margin: 2em 0 2em 0;
   border-radius: 15px;
   background-color: #dcdcdc;
   overflow: auto;
`;

export const HoverOverlay = styled.div`
    background-color: rgba(255,255,255,.8);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

class DropBox extends Component {

  dropRef = React.createRef();

  state = {
    dragging: false
  };

  componentDidMount() {
    let div = this.dropRef.current;
    this.dragCounter = 0;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true })
    }
  };

  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return;
    this.setState({ dragging: false })
  };

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };

  handleClick = () => {
    document.getElementById('fileInput').click();
  };

  handleFileSelect(files) {
    if (files && files.length > 0) {
      this.props.handleDrop(files);
    }
  };

  render() {
    return (
      <ShadowBox ref={this.dropRef} onClick={this.handleClick}>
        {this.state.dragging && <HoverOverlay />}
        {this.props.files && this.props.files.length > 0 ? (
          <FileList files={this.props.files} />
        ) : (
            <div>
              <p>Drop your slides here...</p>
              <PublishIcon style={{ fontSize: "65px", display: "inline-block" }} />
              <p>...or click here to find your file</p>
            </div>
          )}
        <InputBase id="fileInput" type="file" style={{ display: 'none' }}
          multiple accept=".ppt, .pptx" onChange={(e) => this.handleFileSelect(e.target.files)} />
      </ShadowBox>
    );
  };
}

export default DropBox;