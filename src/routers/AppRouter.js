import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Page2 from '../components/Page2';

import MainPage from '../components/MainPage';
import NotFoundPage from '../components/NotFoundPage';

import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header title="Tal Attar" />
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/page2" component={Page2} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
  