import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function GoToTop() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab size="small" color="primary" aria-label="up" style={{ backgroundColor: "#3498db" }} onClick={(e) => {
                e.preventDefault();
                window.location.href = '#';
            }}>
                <ExpandLessIcon />
            </Fab>
        </div>
    );
}