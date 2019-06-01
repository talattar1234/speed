import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Drawer, List, ListItem, Divider, ListItemIcon, ListItemText} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom'
const drawerWidth = 240;
const styles = theme => ({
    root: {
      display: 'flex',
      zIndex: theme.zIndex.drawer
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      '&:hover': {
        width: drawerWidth,
      }
    },

    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1) * 3,
    },
    toolbar: theme.mixins.toolbar,

  });


class DashboardDrawer extends React.Component{
    render(){
        const { classes } = this.props;
        const {open} = this.props;
        return(


          <Hidden xsDown implementation="css">
            <Drawer
               className={classes.drawer}
               variant="permanent"
               classes={{
                paper: classNames({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}

        className = {classNames(classes.drawer,{
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
      >
        <div className={classes.toolbar} />
        <List>
          {['dashboard', 'todos', 'Send email', 'Drafts'].map((text, index) => (         
           
            <ListItem button key={text}>       
            <NavLink to={`/${text}`} activeClassName="selected-drawer-list-item">
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              </NavLink> 
            </ListItem>
            
          
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Hidden>
        )
    }
}

export default withStyles(styles)(DashboardDrawer);