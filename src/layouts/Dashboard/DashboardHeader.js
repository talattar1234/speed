import React from 'react';
import {AppBar, Toolbar, Typography, Tab} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import HeaderUserMenuPopper from './HeaderUserMenuPopper';
import {signOut} from '../../logics/userSettingsLogic';

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
        const {username} = this.props;
        return (
          
                <AppBar position="sticky" color="primary" className={root}>
                  <Toolbar className={toolBar} color="primary">
                  <div style={{display:'flex',justifyContent: 'space-between',alignItems:'center',width:'100%'}}>
                    <div style={{display: 'flex',alignItems:'center'}}>
                        <IconButton color="inherit" onClick={this.onMenuButtonClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h5" color="inherit">
                            Hello {username}
                        </Typography>
                    </div>
                    <div>
                       <HeaderUserMenuPopper onLogout={signOut} />
                    </div>
                  </div>
                    
                    </Toolbar>
                </AppBar>
          
        )
    }
}
export default withStyles(styles)(DashboardHeader);