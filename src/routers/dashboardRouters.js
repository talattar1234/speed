import  MainPage from "../components/MainPage";

const dashboardRouters = [
    {
      path: "/dashboard",
      sidebarName: "Dashboard",
      navbarName: "Material Dashboard",
      icon: "Dashboard",
      component: MainPage
    },

   
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
]

export default dashboardRouters;