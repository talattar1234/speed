import React from 'react';
import {TextField, Typography, FormHelperText} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {LTR} from '../../direction';
const styles = (theme) => ({
    root: {
        
        /*flip: false*/
    },
    myRaw: {
        display: "flex"
    }
  
});

class Dashboard extends React.Component {
    render(){
        const {root,myRaw} = this.props.classes;
        return (
            <React.Fragment>
                <Typography variant="h3">
                    DASHBOARD GRAPHS
                </Typography>         
                    <LTR>
                        <TextField  margin="normal" type="text" label="name" />
                    </LTR>
            </React.Fragment>
        );
    }

}
export default withStyles(styles)(Dashboard);