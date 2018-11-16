import React from 'react';
import {TextField, Typography} from '@material-ui/core';

class Dashboard extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Typography variant="h3">
                    DASHBOARD GRAPHS
                </Typography>
                <TextField   margin="normal" type="text" label="name" />
            </React.Fragment>
        );
    }

}
export default Dashboard;