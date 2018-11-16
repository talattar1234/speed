import React from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';

import DashboardHeader from './DashboardHeader';




import dashboardRouters from "../../routers/dashboardRouters";
class Dashboard extends React.Component{

    render(){
        return (
        <div>
           <DashboardHeader/>
        
        <div>
            This is side menu
            <NavLink to="/dashboard">dashboard</NavLink>
            <NavLink to="/todos">todos</NavLink>
        </div>
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
        </div>)
    }

}
export default Dashboard;