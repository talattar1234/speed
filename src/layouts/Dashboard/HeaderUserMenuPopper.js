import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    typography: {
    /* padding: theme.spacing.unit * 2,*/
    },
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
    primary: {},
    icon: {},
  });

  class HeaderUserMenuPopper extends React.Component {
    state = {
      anchorEl: null,
      open: false,
    };

    handleClick = event => {
      const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !state.open,
      }));
    };

    handleClose = event => {
      if (this.state.anchorEl.contains(event.target)) {
        return;
      }
  
      this.setState({ open: false });
    };


    render() {
      const { classes } = this.props;
      const { anchorEl, open } = this.state;
     
  
      return (
        <div>
          <IconButton color="inherit" onClick={this.handleClick}>
            <AccountCircle />
          </IconButton>
          
          <Popper 
            open={open}
            anchorEl={anchorEl}
            transition>

            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={150}>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                   <MenuItem onClick={this.handleClose} className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                      <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
                    </MenuItem>
                  </MenuList>

                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      );
    }
  }

  export default withStyles(styles)(HeaderUserMenuPopper);