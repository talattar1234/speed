import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import CONFIG from './config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { test } from "./_test"

import "normalize.css/normalize.css";
/*import './styles/styles.scss';*/
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import indexRoutes from "./routers";
import { getModalPropsPayload } from "./selectors/modalSelector";

export const store = configureStore();


if(CONFIG.lang === 'en'){
    require('./styles/styles_en.scss');
}
else{
    //require('./styles/styles_he.scss');
}


const jsx = (
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
  );
  
ReactDOM.render(jsx, document.getElementById("indexReact"));

store.dispatch({type: "ADD_TODO",todo: {id: '1', description:'step by step',createdAt: Date.now()} })
store.dispatch({type: "ADD_TODO",todo: {id: '2', description:'ste3',createdAt: Date.now()} })

test();