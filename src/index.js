import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from "./routers/AppRouter";


import "normalize.css/normalize.css";
/*import './styles/styles.scss';*/

const store = configureStore();

import CONFIG from './config';

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