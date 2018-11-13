import Dashboard from "../layouts/Dashboard/Dashboard";
import Page2 from "../components/Page2";
import Login from "../layouts/Login/Login"
import NotFoundPage from "../layouts/NotFoundPage";

const indexRoutes = [
  { path: "/", component: Dashboard, exact: true},
  { path: "/page2", component: Page2},
  { path: "/login", component: Login },
  { component: NotFoundPage }

];


export default indexRoutes;
