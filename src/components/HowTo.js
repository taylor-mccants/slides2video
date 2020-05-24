import React, {Component} from "react";
import DropBox from "./DropBox";
<<<<<<< HEAD
import { submitSlides } from "../api"

export const HowToContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 1.5em;
  padding: 1em;
  color: black;
  justify-items: center;
`;
=======
import VerticalStepper from "./Stepper";
import {Button, FormControl, TextField, withStyles} from '@material-ui/core';
import CompletionDialog from "./CompletionDialog";
import Grid from "@material-ui/core/Grid";
>>>>>>> 6f3b501078ea3f07cc36b5145113cd2cd19ddf99

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
<<<<<<< HEAD
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
=======

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
>>>>>>> 6f3b501078ea3f07cc36b5145113cd2cd19ddf99
}

export default HowTo;