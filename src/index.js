import React from "react";
import ReactDOM from "react-dom";
import CONFIG from './config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
/*import './styles/styles.scss';*/



export const store = configureStore();


if(CONFIG.lang === 'en'){
    require('./styles/styles_en.scss');
}
else{
    //require('./styles/styles_he.scss');
}


const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
  
ReactDOM.render(jsx, document.getElementById("indexReact"));

store.dispatch({type: "ADD_TODO",todo: {id: '1', description:'3'} })
store.dispatch({type: "ADD_TODO",todo: {id: '2', description:'4'} })

