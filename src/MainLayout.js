import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import indexRoutes from "./routers";
import {getAuthMode} from './selectors/userSettingsSelector';
import {PrivateRoute} from './AuthAndPermission';

class MainLayout extends React.Component{
    /*
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.isAuth === nextProps.isAuth){
            return false;
        }
        return true;
    }*/

    render(){
        const {isAuth} = this.props;
        return (
            <BrowserRouter>
            <React.Fragment>
                <CssBaseline/>
                <Switch>
                {
                    indexRoutes.map((prop,key)=>{
                        if(prop.isPrivate){
                            return <PrivateRoute exact={this.props.exact} path={prop.path} component={prop.component} isAuth={isAuth} key={key}/>
                        } 
                        return <Route exact={this.props.exact} path={prop.path} component={prop.component} key={key} />
                    })
                }
            </Switch>     
            </React.Fragment>
            
        </BrowserRouter>
        )

    }
}

const mapStateToProps = (state) => ({
    isAuth: getAuthMode(state)
})

export default connect(mapStateToProps)(MainLayout);