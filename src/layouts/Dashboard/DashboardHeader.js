import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
}

class DashboardHeader extends React.Component {
   
    render(){
       // const {root} = this.props.classes;

        return (
            <div>
                <AppBar position="sticky" color="primary">
                  <Toolbar style={styles} color="primary">
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h3" color="inherit">
                        My Dashboard Toolbar
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default (DashboardHeader);