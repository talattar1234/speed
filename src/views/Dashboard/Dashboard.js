import React from 'react';
import {TextField, Typography, FormHelperText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {LTR} from '../../direction';
import useWidth from '../../customHooks/useWidth';
import BitRate from './BitRate';
import MyFormikForm from '../../components/MyFormikForm';
import BitRate2 from './BitRate2';
import BitRate3 from './BitRate3';

//import compose from 'recompose/compose';

const useStyles = makeStyles((theme) => ({
    root: {
        
        /*flip: false*/
    },
    myRaw: {
        display: "flex"
    },

    ele1: {
        color: "pink",
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundColor: 'red',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'blue',
          },
    },
}));

const Dashboard = () => {
        const classes = useStyles();
        const {root,myRaw,ele1} = classes;
        const width = useWidth();/* width: 'sm' \ 'xl' \ ... */
        
        return (
            <React.Fragment>
                <Typography variant="h3">
                    DASHBOARD GRAPHS
                </Typography>         
                    <LTR>
                        <TextField  margin="normal" type="text" label="name" />
                    </LTR>

                    <div className = {ele1}>
                        This is a responsive element - {width}
                    </div>
<MyFormikForm/>
                    <BitRate2 lineColor='red' setIntervalTime={10}/>
                    <BitRate3 lineColor='orange' setIntervalTime={100}/>
                    <BitRate3 lineColor='blue' setIntervalTime={100}/>
                   
                    <BitRate3 lineColor='pink' setIntervalTime={100}/>
                    
            </React.Fragment>
        );
}

export default Dashboard;
//export default withStyles(styles)(Dashboard);
/*
export default compose(
    withStyles(styles),
    withWidth()
)(Dashboard);
*/