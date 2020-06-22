import React, {useState} from "react";
import DropBox from "./DropBox";
import VerticalStepper from "./Stepper";
import {Button, TextField, withStyles} from '@material-ui/core';
import CompletionDialog from "./CompletionDialog";
import Grid from "@material-ui/core/Grid";
import SnackbarAlert from "./Alert";
import isEmail from 'validator/lib/isEmail';

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

function HowTo(props) {

  const [files, setFiles] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [alertMessage, setAlertMessage] = useState('');

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleDrop = (newFiles) => {
    setLoading(true);
    let fileList = files;
    console.log("Dropped files: ", newFiles);
    for (let i = 0; i < newFiles.length; i++) {
      if (!newFiles[i].name) return;
      fileList.push(newFiles[i].name);
    }
    setFiles(fileList);
    setLoading(false);
    if (isEmail(emailAddress))
      setActiveStep(2);
    else
      setActiveStep(1);
  };

  const handleInputChange = (key, value) => {
    setEmailAddress(value);
    if (files.length >0) {
      if(isEmail(value))
        setActiveStep(2);
      else
        setActiveStep(1);
    }
  };

  const handleDownload = () => {
    showAlert();
    setDialogOpen(true);
    setActiveStep(3);
  };

  const handleCloseDialog = () => {
    setFiles([]);
    setActiveStep(0);
    setEmailAddress('');
    setDialogOpen(false);
  };

  const showAlert = () => {
    if (files.length === 1) {
      setAlertSeverity('success');
      setAlertMessage("Your file was sent!");
    } else {
      setAlertSeverity('error');
      setAlertMessage("You must upload exactly 1 file");
    }
    //setAlertOpen(true);
  };

    return (
      <Grid container style={{ padding: '3em' }}>
        <SnackbarAlert severity={alertSeverity} message={alertMessage} open={alertOpen} handleClose={handleCloseAlert} />
        <VerticalStepper activeStep={activeStep} />
        <DropBox handleDrop={handleDrop} files={files} loading={loading} />
        <Grid item lg={8} md={8} sm={8} style={{ display: 'flex'}}>
          <TextField id='validInput' style={{width: '90%'}} label='Email' variant='outlined'
            key="email" value={emailAddress} error={isEmail(emailAddress)}
            onChange={(e) => {
              handleInputChange("emailAddress", e.target.value);
            }}
          />
        </Grid>
      <Grid item lg={4} md={4} sm={4} style={{ display: 'flex', flexDirection: 'row-reverse'}}>
          <ColorButton disabled={!files.length > 0 || !isEmail(emailAddress)}
            variant="contained"
            onClick={handleDownload}>
            Create Video
          </ColorButton>
        </Grid>
        <CompletionDialog dialogOpen={dialogOpen} handleCloseDialog={handleCloseDialog} />
      </Grid>
    );
}

export default HowTo;