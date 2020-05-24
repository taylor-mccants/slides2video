import React, {Component} from "react";
import DropBox from "./DropBox";
import VerticalStepper from "./Stepper";
import {Button, FormControl, TextField, withStyles} from '@material-ui/core';
import CompletionDialog from "./CompletionDialog";
import Grid from "@material-ui/core/Grid";

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
        activeStep: 0,
        emailAddress: '',
        dialogOpen: false,
    };

    handleDrop = (files) => {
        let fileList = this.state.files;
        console.log("Dropped files: ", files);
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            fileList.push(files[i].name);
        }
        this.setState({files: fileList, activeStep: 1});
    };

    handleInputChange(key, value) {
        this.setState({[key]: value});
    };

    handleDownload = () => {
        this.setState({activeStep: 2, dialogOpen: true});
    };

    handleCloseDialog = () => {
        this.setState({files: [], activeStep: 0, emailAddress: '', dialogOpen: false});
    };

    render() {
        return (
                <Grid container style={{padding: '3em'}}>
                    <VerticalStepper activeStep={this.state.activeStep}/>
                    <DropBox handleDrop={this.handleDrop} files={this.state.files}/>
                    <Grid item lg={8} md={7} sm={8}>
                        <FormControl style={{width: '100%'}}>
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                       key="email" value={this.state.emailAddress}
                                       onChange={(e) => {
                                           this.handleInputChange("emailAddress", e.target.value);
                                       }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item lg={4} md={5} sm={4} style={{textAlign:'right'}}>
                        <ColorButton disabled={!this.state.files.length > 0 || !this.state.emailAddress.length > 0}
                                     variant="contained"
                                     onClick={this.handleDownload}>
                            Create Video
                        </ColorButton>
                    </Grid>
                    <CompletionDialog dialogOpen={this.state.dialogOpen} handleCloseDialog={this.handleCloseDialog}/>
                </Grid>
        );
    }
}

export default HowTo;