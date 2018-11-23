import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import {Switch, Route, Redirect, NavLink} from 'react-router-dom';

import DashboardHeader from './DashboardHeader';
import DashbaordDrawer from './DashboardDrawer';
import dashboardRouters from "../../routers/dashboardRouters";
import classNames from 'classnames';

const styles = (theme) => ({
    root: {
      /*  display: "flex"*/
    },
    contentPane: {
        float: theme.direction ==='ltr' ? "right": "left",
    },
    contentPanelMenuOpen:{
        width: "calc(100% - 240px)",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        
    },
    contentPanelMenuClose: {
        width: "calc(100% - 73px)",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          })
    },
   
})

class Dashboard extends React.Component{
    state = {
        isMenuOpen: true
    }

    handleMenuButtonClick = () =>{
        this.setState((prevState)=>({
            isMenuOpen: !prevState.isMenuOpen
        }))
    }
    render(){
        const {contentPanelMenuOpen,contentPane, contentPanelMenuClose} = this.props.classes;
     
        return (
        <div>
            <div>
                <DashboardHeader onMenuButtonClick = {this.handleMenuButtonClick}/>
            </div>


            <div>

                {/* left menu drawer */}

                
                    
                        <DashbaordDrawer  open={this.state.isMenuOpen} drawerWidth="250px" />
                    
                    {/* 
                        <NavLink to="/dashboard">dashboard</NavLink>
                        <NavLink to="/todos">todos</NavLink>
                    */}
                   

                {/* right menu content */}

                <div className={  classNames(
                    contentPane,
                    {
                    [contentPanelMenuOpen]: this.state.isMenuOpen,
                    [contentPanelMenuClose]: !this.state.isMenuOpen
                })}>
                    <Switch>
                    {
                        dashboardRouters.map((prop, key) => {
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key} />;
                            return <Route path={prop.path} component={prop.component} key={key} exact={prop.exact} />;
                    })}
                    </Switch>
                </div>

            </div>
        </div>
        )
    }

}
export default withStyles(styles)(Dashboard);