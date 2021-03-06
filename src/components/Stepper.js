import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent',
        padding: 0,
    },
    stepLabel: {
        textAlign: 'left'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Select a PowerPoint (.pptx) file and make sure each slide has notes for narration',
        'Enter the email address you would like the video to be sent to',
        'Create video and wait!'];
}

export default function VerticalStepper(props) {
    const classes = useStyles();
    const steps = getSteps();

    return (
        <Stepper id='steps' activeStep={props.activeStep} orientation="vertical" className={classes.root}>
            {steps.map((label, index) => (
                <Step id='completedStep' key={label}>
                    <StepLabel className={classes.stepLabel}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}