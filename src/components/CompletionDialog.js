import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import React from "react";

export default function CompletionDialog(props) {
    return (
        <Dialog
            open={props.dialogOpen}
            onClose={props.handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Download Successful!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please check your email in the next few minutes for a link to download your file from our server.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseDialog} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
