import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import 'typeface-roboto';
import CONFIG from './config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { test } from "./_test"
import {create} from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName, jssPreset, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import "normalize.css/normalize.css";
/*import './styles/styles.scss';*/
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import indexRoutes from "./routers";
import { getModalPropsPayload } from "./selectors/modalSelector";

export const store = configureStore();


const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const generateClassName = createGenerateClassName();
const theme = createMuiTheme({
    direction: CONFIG.direction,
});
function RTL(props) {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {props.children}
      </JssProvider>
    );
  }

if(CONFIG.lang === 'en'){
    require('./styles/styles_en.scss');
}
else{
    //require('./styles/styles_he.scss');
}

    document.body.dir = CONFIG.direction;



const jsx = (
    <RTL>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {
                        indexRoutes.map((prop,key)=>{
                            return <Route path={prop.path} component={prop.component} key={key} />
                        })
                    }
                </Switch>     
            </BrowserRouter>
            </Provider>
        </MuiThemeProvider>
    </RTL>
  );
  
ReactDOM.render(jsx, document.getElementById("indexReact"));

store.dispatch({type: "ADD_TODO",todo: {id: '1', description:'step by step',createdAt: Date.now()} })
store.dispatch({type: "ADD_TODO",todo: {id: '2', description:'ste3',createdAt: Date.now()} })

test();