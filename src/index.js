import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import CssBaseline from '@material-ui/core/CssBaseline';
import CONFIG from './config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { test } from "./_test"
import {MuiThemeProvider} from '@material-ui/core/styles';
import {RTL, LTR} from './direction';

/*import './styles/styles.scss';*/
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import indexRoutes from "./routers";
import { getModalPropsPayload } from "./selectors/modalSelector";
import theme from "./Themes/Theme";
export const store = configureStore();

const DirectionWrapper = CONFIG.direction == "ltr" ? LTR : RTL


if(CONFIG.lang === 'en'){
    require('./styles/styles_en.scss');
}
else{
    //require('./styles/styles_he.scss');
}

document.body.dir = CONFIG.direction;



const jsx = (
    <DirectionWrapper>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <CssBaseline/>
                    <Switch>
                    {
                        indexRoutes.map((prop,key)=>{
                            return <Route path={prop.path} component={prop.component} key={key} />
                        })
                    }
                </Switch>     
                </React.Fragment>
                
            </BrowserRouter>
            </Provider>
        </MuiThemeProvider>
    </DirectionWrapper>
  );
  
ReactDOM.render(jsx, document.getElementById("indexReact"));

store.dispatch({type: "ADD_TODO",todo: {id: '1', description:'step by step',createdAt: Date.now()} })
store.dispatch({type: "ADD_TODO",todo: {id: '2', description:'ste3',createdAt: Date.now()} })

test();