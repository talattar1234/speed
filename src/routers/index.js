import Dashboard from "../layouts/Dashboard/Dashboard";
import Page2 from "../components/Page2";
import Login from "../layouts/Login/Login"
import NotFoundPage from "../layouts/NotFoundPage";

const indexRoutes = [

  { path: "/page2", component: Page2, isPrivate:true },
  { path: "/login", component: Login },
  { path: "/", component: Dashboard },
  /*{ component: NotFoundPage }*/

];


export default indexRoutes;
