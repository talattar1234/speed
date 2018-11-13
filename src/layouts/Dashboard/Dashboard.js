import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';



import dashboardRouters from "../../routers/dashboardRouters";
class Dashboard extends React.Component{

    render(){
        return (<div>
            This is dashboard
                

        <Switch>
            {
                dashboardRouters.map((prop, key) => {
                    if (prop.redirect)
                        return <Redirect from={prop.path} to={prop.to} key={key} />;
                    return <Route path={prop.path} component={prop.component} key={key} exact={prop.exact} />;
    })}
  </Switch>

        </div>)
    }

}
export default Dashboard;