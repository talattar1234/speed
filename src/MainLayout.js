import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router} from 'react-router-dom';
import {connect} from 'react-redux';

import {getAuthMode} from './selectors/userSettingsSelector';

import MainRouter from './MainRouter';

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
           
                <React.Fragment>
                    <CssBaseline/>
                    <MainRouter/>
            </React.Fragment>
            
         
        )

    }
}

const mapStateToProps = (state) => ({
    isAuth: getAuthMode(state)
})

export default connect(mapStateToProps)(MainLayout);