import React from "react";
import {Backdrop as MuiBackdrop, CircularProgress, Typography} from "@material-ui/core"
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '12rem',
        color:  theme.palette.type ==="light"? "rgb(97, 26, 21)" : 'rgb(250, 179, 174)',
        background: theme.palette.type === 'light'? 'rgb(253, 236, 234)' : 'rgb(24, 6, 5)',
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:"column"
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    mainTextLayout: {
        animation: 'flickerAnimation 1s infinite',
        display: 'flex',
        alignItems: 'center'
    },
    errorIcon: {
        marginRight: theme.spacing(1)
    }
  }));

/*
@keyframes flickerAnimation {
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
*/

const Backdrop = (props)=>{
    const classes = useStyles();

    return (
        
            <MuiBackdrop className={classes.backdrop} open={props.isOpen}>
                <div className = {classes.root}>
                    <div className={classes.mainTextLayout}>
                    <WarningIcon className={classes.errorIcon}/>
                    <Typography  variant="h6">
                        Server diconnected, trying to reconnect</Typography>
                    </div>
                    <div>
                    <CircularProgress color="inherit"/>
                    </div>
                </div>
            </MuiBackdrop>
    )
}

export default  Backdrop;