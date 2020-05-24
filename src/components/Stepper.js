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
    return ['Upload your chosen powerpoint file with notes',
        'Enter your email address',
        'Check your email for a video download link'];
}

export default function VerticalStepper(props) {
    const classes = useStyles();
    const steps = getSteps();

    return (
        <Stepper activeStep={props.activeStep} orientation="vertical" className={classes.root}>
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel className={classes.stepLabel}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}