import Dashboard from "../layouts/Dashboard/Dashboard";
import Page2 from "../components/Page2";
import Login from "../layouts/Login/Login";
import Page404 from '../layouts/Page404/Page404';



const indexRoutes = [
  { path: "/page2", component: Page2, isPrivate:true },
  { path: "/login", component: Login },
  { path: "/", component: Dashboard },
/*
  { path: "/", component: Login, exact: true},
  { path: "/login", component: Login },
  { path: "/page2", component: Page2, isPrivate:true },
  { path: "/dashboard", component: Dashboard,  isPrivate:true },
  { path: "/", component: Page404},
  */
  /*{ component: NotFoundPage }*/

];


export default indexRoutes;
