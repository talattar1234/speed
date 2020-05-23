import React, {forwardRef, Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer,Button, List, ListItem, Divider, ListItemIcon, ListItemText,  colors, Tooltip} from '@material-ui/core';
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

const TooltipWrapper = ({isTooltipActive, title, children})=>{
 
  return isTooltipActive? <Tooltip placement="right" title={title} aria-label={title}>
    {children}
  </Tooltip> : <>{children}</>
}

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

    content: {
      overflow: 'hidden',
      padding: theme.spacing(1) * 3,
    },
    toolbar: theme.mixins.toolbar,
    item: {
      minWidth: 0,
      padding: theme.spacing(1),
      justifyContent: 'flex-start',
      textTransform: 'none',
      width: '100%',
      display: 'flex',
    },
    
    icon: {
      color: theme.palette.icon,
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
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

        const {open, menuItems} = props;

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
          {menuItems.map((menuItem, index) => (         
           <TooltipWrapper isTooltipActive={!open} title={menuItem.title} key={menuItem.title}>
            <ListItem to={menuItem.path}  activeClassName={classes.active} button component={CustomRouterLink} disableGutters  className={classNames({
              [classes.item]: true,
            
            })} 
          >
            <ListItemIcon className={classes.icon}>
            {/* <InboxIcon /> */}
            {menuItem.icon}
            </ListItemIcon>
            <ListItemText>
            {menuItem.title}
            </ListItemText>

            
            

            {/* <NavLink to={`/${text}`} activeClassName="selected-drawer-list-item">
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              </NavLink>  */}
            </ListItem>
            
            </TooltipWrapper>
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