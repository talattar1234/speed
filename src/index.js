import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";

import CONFIG from './config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { test } from "./_test"
import {MuiThemeProvider} from '@material-ui/core/styles';
import {RTL, LTR} from './direction';
import MainLayout from './MainLayout';

/*import './styles/styles.scss';*/



//import { getModalPropsPayload } from "./selectors/modalSelector";
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
                <MainLayout/>
            </Provider>
        </MuiThemeProvider>
    </DirectionWrapper>
  );
  
ReactDOM.render(jsx, document.getElementById("indexReact"));

store.dispatch({type: "ADD_TODO",todo: {id: '1', description:'step by step',createdAt: Date.now()} })
store.dispatch({type: "ADD_TODO",todo: {id: '2', description:'ste3',createdAt: Date.now()} })
store.dispatch({type: "ADD_TODO",todo: {id: '3', description:'ste3',createdAt: Date.now()} })
store.dispatch({type: "ADD_TODO",todo: {id: '4', description:'stfw3',createdAt: Date.now()} })

test();