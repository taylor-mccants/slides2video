import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: 10,
        maxHeight: 20,
    },
    title: {
        margin: 0,
        minHeight: 30,
    },
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>slides2video</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}