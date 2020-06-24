import React, {useState} from "react";
import DropBox from "./DropBox";
import VerticalStepper from "./Stepper";
import {Button, CircularProgress, TextField, withStyles} from '@material-ui/core';
import CompletionDialog from "./CompletionDialog";
import Grid from "@material-ui/core/Grid";
import SnackbarAlert from "./Alert";
import isEmail from 'validator/lib/isEmail';
import {submitSlides} from "../api"

function HowTo(props) {

    const [files, setFiles] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('info');
    const [alertMessage, setAlertMessage] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);


    const handleFileSelect = (newFiles) => {
        let fileList = [];
        for (let i = 0; i < newFiles.length; i++) {
            if (!newFiles[i].name) return;
            fileList.push(newFiles[i]);
        }
        setFiles(fileList);
        if (isEmail(emailAddress))
            setActiveStep(2);
        else
            setActiveStep(1);
    };

    const handleInputChange = (key, value) => {
        setEmailAddress(value);
        if (files.length > 0) {
            if (isEmail(value))
                setActiveStep(2);
            else
                setActiveStep(1);
        }
    };

    const onEnterPress = (event) => {
        if (event.key === 'Enter' && files.length > 0 && isEmail(emailAddress)) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setLoading(true);
        setActiveStep(3);
        const formData = new FormData();
        for (const f of files) {
            formData.append('files', f)
        }
        formData.append('email', emailAddress);
        submitSlides(formData);
        setTimeout(function () {
            setLoading(false);
            setDialogOpen(true);
        }, 2000);
    };

    const handleCloseDialog = () => {
        setFiles([]);
        setActiveStep(0);
        setEmailAddress('');
        setDialogOpen(false);
    };

    const showAlert = (severity, message) => {
        setAlertSeverity(severity);
        setAlertMessage(message);
        setAlertOpen(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };


    return (
        <Grid container style={{padding: '40px', maxWidth: "800px", display: 'flex', flexDirection: 'column'}}
              id='HowToContent'>
            <h2 style={{marginBottom: '32px', marginTop: '-5px', textAlign: 'left'}}>Easily convert your PowerPoint
                slides into lecture videos!</h2>
            <VerticalStepper activeStep={activeStep}/>
            <DropBox onFileSelect={handleFileSelect} files={files} showAlert={showAlert}/>
            <div style={{display: 'flex'}}>
                <Grid item lg={8} md={8} sm={8} style={{display: 'flex'}}>
                    <TextField style={{width: '90%'}} label='Email' variant='outlined'
                               key="email" value={emailAddress} onKeyPress={onEnterPress} autoComplete="email"
                               onChange={(e) => {
                                   handleInputChange("emailAddress", e.target.value);
                               }}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} style={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <Button disabled={!files.length > 0 || !isEmail(emailAddress)}
                            variant="contained"
                            color='primary'
                            onClick={handleSubmit}
                            style={{minWidth: '56px', fontWeight: 'bold'}}>

                        {loading ? <CircularProgress color={'white'}/> : 'Create Video'}
                    </Button>
                </Grid>
            </div>
            <CompletionDialog dialogOpen={dialogOpen} handleCloseDialog={handleCloseDialog} email={emailAddress}/>
            <SnackbarAlert open={alertOpen} severity={alertSeverity}
                           message={alertMessage} handleClose={handleCloseAlert}/>
        </Grid>
    );
}

export default HowTo;