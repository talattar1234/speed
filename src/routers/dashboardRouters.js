import  Dashboard from "../views/Dashboard/Dashboard"
import Todos from "../views/Todos/Todos"
/*import Dashboard from "../layouts/Dashboard/Dashboard";*/
const dashboardRouters = [
  
    {
      path: "/dashboard",
      sidebarName: "Dashboard",
      navbarName: "Material Dashboard",
      icon: "Dashboard",
      component: Dashboard
    },
    {
      path: "/todos",
      sidebarName: "Todos",
      navbarName: "Material Todos",
      icon: "Todos",
      component: Todos
    },
    
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" },
  
]

export default dashboardRouters;