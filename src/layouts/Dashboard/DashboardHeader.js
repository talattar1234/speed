import React from 'react';
import {AppBar, Toolbar, Typography, Tab} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
    },
    toolBar: {
        display: "flex",
        /*  justifyContent: "space-between",*/
    }
  
});

class DashboardHeader extends React.Component {
   onMenuButtonClick = ()=> {
       this.props.onMenuButtonClick();
   }
    render(){
        const {root, toolBar} = this.props.classes;

        return (
            <div>
                <AppBar position="sticky" color="primary" className={root}>
                  <Toolbar className={toolBar} color="primary">
                    <IconButton color="inherit" onClick={this.onMenuButtonClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" color="inherit">
                        My Dashboard Toolbar
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default withStyles(styles)(DashboardHeader);