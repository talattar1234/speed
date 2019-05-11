import Dashboard from "../layouts/Dashboard/Dashboard";
import Page2 from "../components/Page2";
import Login from "../layouts/Login/Login";
import Page404 from '../layouts/Page404/Page404';



const indexRoutes = [

  { path: "/", component: Login, exact: true},
  { path: "/page2", component: Page2, isPrivate:true },
  { path: "/", component: Dashboard, isPrivate:true},

  /*
  { path: "/", component: Login, exact: true},
  { path: "/page2", component: Page2, isPrivate:true },
  { path: "/todos", component: Dashboard, isPrivate:true },
  { path: "/dashboard", component: Dashboard,  isPrivate:true },
  { path: "/", component: Page404},
  */
  

];


export default indexRoutes;
