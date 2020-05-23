import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import useWidth from "../../customHooks/useWidth";
import {useSelector} from 'react-redux';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import {getUsername} from '../../selectors/userSettingsSelector';
//import {PrivateRoute} from '../../AuthAndPermission';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardHeader from './DashboardHeader';
import DashbaordDrawer from './DashboardDrawer';
import dashboardRouters from "../../routers/dashboardRouters";
import classNames from 'classnames';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';


const menuItems = [
    {
        title: 'Dashbaord',
        path: '/dashboard',
        icon: <InboxIcon/>
    },
    {
        title: 'Todos',
        path: '/todos',
        icon: <InboxIcon/>
    },
    {
        title: 'Send Email',
        path: '/dashboard1',
        icon: <InboxIcon/>
    },
    {
        title: 'Draft',
        path: '/dashboard2',
        icon: <InboxIcon/>
    },


]

const useStyles = makeStyles((theme) => ({
    root: {
      /*  display: "flex"*/
    },
    contentPane: {
        float: theme.direction ==='ltr' ? "right": "left",
        flexGrow: 1
    },
    contentPanelMenuOpen:{
        
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        
    },
    contentPanelMenuClose: {
       
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          })
    },
    contentMobileMode: {
        width: "100%"
    }
   
}));

const Dashboard  = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);


    const handleMenuButtonClick = () =>{
      setIsMenuOpen(!isMenuOpen);
    }

    const width = useWidth();
    const classes = useStyles();
    const {contentPanelMenuOpen
        ,contentPane,
        contentPanelMenuClose,
        contentMobileMode
    } = classes;
  
    
    const {username} = useSelector((state)=>({
        username: getUsername(state)
    }));

    

    return (
        <div>
            <div>
                <DashboardHeader username={username} onMenuButtonClick = {handleMenuButtonClick}/>
            </div>


            <div style={{display: 'flex'}}>

                {/* left menu drawer */}

                
                    
                        <DashbaordDrawer menuItems={menuItems}  open={isMenuOpen} drawerWidth="250px" />
                    
                    {/* 
                        <NavLink to="/dashboard">dashboard</NavLink>
                        <NavLink to="/todos">todos</NavLink>
                    */}
                   

                {/* right menu content */}

                <div className={  classNames(
                    contentPane,
                    {
                    [contentPanelMenuOpen]: isMenuOpen,
                    [contentPanelMenuClose]: !isMenuOpen,
                    [contentMobileMode] : width == 'xs'
                })}>
                    <Switch>
                    {
                        dashboardRouters.map((prop, key) => {
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key} />;
                            return <Route path={prop.path} component={prop.component} key={key} exact={prop.exact}  />;
                    })}
                    </Switch>
                </div>

            </div>
        </div>
        )
    }



export default Dashboard;
//export default compose(withStyles(styles),withWidth(),connect(mapStateToProps))()

//export default withStyles(styles)(Dashboard);