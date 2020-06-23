import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: "400px"
    },
    toolbar: {
        minHeight: 48,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'Left',
        margin: 5,
        minHeight: 30,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <h3 className={classes.title}>slides2video &#9654;</h3>
                </Toolbar>
            </AppBar>
        </div>
    );
}
