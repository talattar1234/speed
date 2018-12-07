import React from 'react';
import indexRoutes from "./routers";
import { getAuthMode } from './selectors/userSettingsSelector';
import { connect } from 'react-redux';
import {PrivateRoute} from './AuthAndPermission';
import history from './mainHistory';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

class MainRouter extends React.Component{

    render(){
        const {isAuth} = this.props;

        return (
            <Router history={history}>
                <Switch>
                 {
                        indexRoutes.map((prop,key)=>{
                            if(prop.isPrivate){
                            return <PrivateRoute exact={prop.exact} path={prop.path} component={prop.component} isAuth={isAuth} key={key}/>
                            } 
                            return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
                     })
                 }
             </Switch>   
            </Router>  
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: getAuthMode(state)
})

export default connect(mapStateToProps)(MainRouter)