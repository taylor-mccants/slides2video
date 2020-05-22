import React, {Component} from "react";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import FileList from "./FileList";

export const ShadowBox = styled.div`
   width: 75%;
   position: relative;
   height: 10em;
   padding: 0.5em;
   margin: 2em;
   border-radius: 15px;
   box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.10196);
   background-color: #dcdcdc;
   display: inline-block;
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
            this.props.handleDrop(e.dataTransfer.files);
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    };

    render() {
        return (
            <ShadowBox ref={this.dropRef}>
                {this.state.dragging && <HoverOverlay/> }
                {this.props.files && this.props.files.length > 0 ? (
                    <FileList files = {this.props.files}/>
                ) : (
                    <div>
                        <p>Drop your slides here...</p>
                        <PublishIcon style={{fontSize: "65px", display: "inline-block"}}/>
                    </div>
                )}
            </ShadowBox>
        );
    };
}

export default DropBox;