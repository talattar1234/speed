import  MainPage from "../components/MainPage";
import Dashboard from "../layouts/Dashboard/Dashboard";
const dashboardRouters = [
  /*{ redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" },*/
    {
      path: "/",
      sidebarName: "Dashboard",
      navbarName: "Material Dashboard",
      icon: "Dashboard",
      component: MainPage
    },

   
  
]

export default dashboardRouters;