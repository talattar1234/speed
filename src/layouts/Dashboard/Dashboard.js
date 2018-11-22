import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import {Switch, Route, Redirect, NavLink} from 'react-router-dom';

import DashboardHeader from './DashboardHeader';
import DashbaordDrawer from './DashboardDrawer';
import dashboardRouters from "../../routers/dashboardRouters";

const styles = (theme) => ({
    root: {
        display: "flex"
    }
})

class Dashboard extends React.Component{
    


    render(){
        const {root, appBar} = this.props.classes;

        return (
        <div>
            <div className={appBar}>
                <DashboardHeader/>
            </div>


            <div className={root}>

                {/* left menu drawer */}

                
                   
                    <DashbaordDrawer open={false} drawerWidth="250px" />

                    {/* 
                        <NavLink to="/dashboard">dashboard</NavLink>
                        <NavLink to="/todos">todos</NavLink>
                    */}
                   

                {/* right menu content */}

                <div>
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