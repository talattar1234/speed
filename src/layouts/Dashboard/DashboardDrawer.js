import React, {forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer,Button, List, ListItem, Divider, ListItemIcon, ListItemText,  colors} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';


const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1, minWidth: 0 }}
  >
    <NavLink {...props} />
  </div>
));

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      zIndex: theme.zIndex.drawer
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    
    },
    drawerOpen: {
      overflow: 'hidden',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      overflow: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      
      width: '5.7rem',
      // width: theme.spacing(7) + 1,
      // [theme.breakpoints.up('sm')]: {
      //   width: theme.spacing(9) + 1,
      // },
      // '&:hover': {
      //   width: drawerWidth,
      // }
    },

    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      minWidth: 0,
      overflow: 'hidden',
      padding: theme.spacing(1) * 3,
    },
    toolbar: theme.mixins.toolbar,
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      /*color: colors.blueGrey[800],*/
      minWidth: 0,
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      color: theme.palette.icon,
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(2),

    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '& $icon': {
        color: theme.palette.primary.main
      }
    }
  }));


const DashboardDrawer = (props)=> {
    
        const  classes  = useStyles();

        const {open} = props;

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
        <List style={{padding: '0.8rem'}}>
          {['dashboard', 'todos', 'Send email', 'Drafts'].map((text, index) => (         
           
            <ListItem  disableGutters key={text} className={classes.item}>       
            <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={`/${text}`}
          >
            <div className={classes.icon}><InboxIcon /></div>
            {text}
          </Button>
            {/* <NavLink to={`/${text}`} activeClassName="selected-drawer-list-item">
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              </NavLink>  */}
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

export default DashboardDrawer
//export default withStyles(styles)(DashboardDrawer);