import React, {Component} from "react";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import FileList from "./FileList";

export const ShadowBox = styled.div`
   width: 100%;
   height: 180px;
   margin: 2em 0 2em 0;
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
        validFileTypes: false,
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
            this.validateFileTypes(e.dataTransfer.files);
            if (this.state.validFileTypes) {
                this.props.onFileSelect(e.dataTransfer.files);
            } else {
                this.props.showAlert('error', "wrong file type");
            }
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    };

    handleClick = () => {
        document.getElementById('fileInput').click();
    };

    handleFileSelect(newFiles) {
        console.log("newFiles: ", newFiles);
        if (newFiles && newFiles.length > 0) {
            this.props.onFileSelect(newFiles);
        }
    };

    validateFileTypes(newFiles) {
        for (let i = 0; i < newFiles.length; i++) {
            let ext = newFiles[i].name.substring(newFiles[i].name.indexOf('.'));
            if (ext !== ".ppt" && ext !== ".pptx") {
                this.setState({validFileTypes: false});
                return;
            }
        }
        this.setState({validFileTypes: true});
    }

    render() {
        return (
                <ShadowBox ref={this.dropRef} onClick={this.handleClick}>
                    {this.state.dragging && <HoverOverlay/>}
                    {this.props.files && this.props.files.length > 0 ? (
                        <FileList files={this.props.files}/>
                    ) : (
                        <div>
                            <p>Drop your slides here...</p>
                            <PublishIcon style={{fontSize: "65px", display: "inline-block"}}/>
                            <p>...or click here to find your file</p>
                        </div>
                    )}
                    <form action="" enctype="multipart/form-data" method="post">
                        <input id="fileInput" type="file" style={{display: 'none'}}
                               multiple="multiple" accept=".ppt, .pptx"
                               onChange={(e) => this.handleFileSelect(e.target.files)}/>
                    </form>
                </ShadowBox>
        );
    };

}

export default DropBox;