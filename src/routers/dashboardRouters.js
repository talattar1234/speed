import  Dashboard from "../views/Dashboard/Dashboard"
import Todos from "../views/Todos/Todos"
import Graphs from "../views/Graphs/Graphs"
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
    {
      path: "/graphs",
      sidebarName: "Graphs",
      navbarName: "Graphs",
      icon: "Graphs",
      component: Graphs
    },
    
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" },
  
]

export default dashboardRouters;