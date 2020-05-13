import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import DropBox from "./DropBox";
import dummy_download from "../dummy_download";
import dummy_download2 from "../dummy_download2.txt";
import dummy_video from "../dummy_video.mp4";
//import dummy_download from "C:/Users/Taylor/slides2vid/public/dummy_download";

export const HowToContainer = styled.div`
  display: grid;
  position: relative;
  width: 50%;
  margin: 1.5em;
  padding: 1em;
  color: black;
  justify-items: center;
`;

export const StepsContainer = styled.div`
    display: sub-grid;
    text-align: left;
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
        files: [],
        downloadFile: dummy_download2
    };

    handleDrop = (files) => {
        let fileList = this.state.files;
        console.log("Dropped files: ", files);
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            fileList.push(files[i].name);
        }
        this.setState({files: fileList})
    };

    downloadFile(absoluteUrl) {
        let link = document.createElement('a');
        link.href = absoluteUrl;
        link.download = 'dummy_download_file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    handleDownload = () => {
        //this.downloadFile("../dummy_video.mp4");
        window.open(dummy_video);
        console.log("Ready to download: ", this.state.downloadFile);
        /*let file = this.state.downloadFile;
        file.download = 'slides2video_file';
        file.click();*/
    };

    render() {
        return (
            <HowToContainer>
                <h2>Try it now!</h2>
                <StepsContainer>
                    1. Create slides <br/>
                    2. Add speaker notes to each slide<br/>
                    3. Upload powerpoint file<br/>
                    4. Download your video!<br/>
                </StepsContainer>
                <DropBox handleDrop={this.handleDrop} files={this.state.files}/>
                <ColorButton disabled = {!this.state.files.length > 0} variant="contained"
                             onClick = {this.handleDownload}>
                    Create Video
                </ColorButton>
            </HowToContainer>
        );
    }
}

export default HowTo;