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
            <DialogTitle id="alert-dialog-title">Your request has been submitted!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Video rendering can take a while. An email will be sent to <b>{props.email}</b> in the next two
                    hours with a link to download your video.
                    If there are any problems, please contact luca.weibel@uzh.ch
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
