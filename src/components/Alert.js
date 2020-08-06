import React from 'react';
import {Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

export default function SnackbarAlert(props) {

    return(
        <Snackbar open={props.open} autoHideDuration={7000} onClose={props.handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <MuiAlert elevation={6} variant="filled" onClose={props.handleClose} severity={props.severity}>
                {props.message}
            </MuiAlert>
        </Snackbar>

    );
}