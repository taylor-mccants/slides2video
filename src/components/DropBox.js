import React, {Component} from "react";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import FileList from "./FileList";

export const ShadowBox = styled.div`
   width: 100%;
   height: 190px;
   margin: 30px 0;
   position: relative;
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
        dragging: false,
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

    onDragStart = (e) => {
        e.dataTransfer.clearData();
        e.setData('text/plain', 'test');
    };

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true})
        }
    };

    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter > 0) return;
        this.setState({dragging: false})
    };

    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({dragging: false});
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            if (this.validateFileInput(e.dataTransfer.files)) {
                this.props.onFileSelect(e.dataTransfer.files);
            }
            this.dragCounter = 0;
        }
    };

    handleClick = () => {
        document.getElementById('fileInput').click();
    };

    handleFileSelect(newFiles) {
        if (newFiles && newFiles.length > 0 && this.validateFileInput(newFiles)) {
            this.props.onFileSelect(newFiles);
        }
    };

    validateFileInput(newFiles) {
        return this.validateFileTypes(newFiles) && this.validateFileLimit(newFiles) && this.validateFileSize(newFiles)
    }

    validateFileTypes(newFiles) {
        for (let i = 0; i < newFiles.length; i++) {
            let ext = newFiles[i].name.substring(newFiles[i].name.lastIndexOf('.'));
            if (ext !== ".pptx") {
                this.props.showAlert('error', "Incorrect file type selected.");
                return false
            }
        }
        return true
    }

    validateFileLimit(newFiles) {
        if (newFiles.length > 1) {
            this.props.showAlert('error', 'You can only upload one file at a time.');
            return false
        }
        return true
    }

    validateFileSize(newFiles) {
        if (newFiles[0].size / 1024 / 1024 > 20) {
            this.props.showAlert('error', 'Maximum file size of 20 MB exceeded.');
            return false
        }
        return true
    }

    render() {
        return (
            <ShadowBox ref={this.dropRef} onClick={this.handleClick} ondragstart={this.onDragStart}>
                {this.state.dragging && <HoverOverlay/>}
                {this.props.files && this.props.files.length > 0 ? (
                    <FileList files={this.props.files}/>
                ) : (
                    <div style={{padding: "0px 20px"}}>
                        <p>Drop your slides here / Click here to find your file</p>
                        <PublishIcon style={{fontSize: "65px", display: "inline-block"}}/>
                        <p>20 MB Limit</p>
                    </div>
                )}
                <form action="" encType="multipart/form-data" method="post">
                    <input id="fileInput" type="file" style={{display: 'none'}}
                           accept=".pptx"
                           onChange={(e) => this.handleFileSelect(e.target.files)}/>
                </form>
            </ShadowBox>
        );
    };

}

export default DropBox;