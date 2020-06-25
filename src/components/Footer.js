import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#dcdcdc',
        fontSize: '12px',
        textAlign: 'center',
    }
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <p>
                supported by <a href='http://www.socialnetworks.uzh.ch/' target='_blank'>URPP Social Networks</a> at the University of Zurich
            </p>
        </div>
    );
}