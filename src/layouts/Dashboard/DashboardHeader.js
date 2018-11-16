import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles= {
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
}

class DashboardHeader extends React.Component {
    render(){
        return (
            <div>
                  <AppBar position="sticky">
                  <Toolbar style={styles.root}>
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
export default DashboardHeader;