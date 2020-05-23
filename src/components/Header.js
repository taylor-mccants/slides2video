import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
                <Toolbar>
                    <h2 className={classes.title}>slides2video</h2>
                    <PlayArrowIcon style={{fontSize: 30}}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
