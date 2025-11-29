import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        }
    ]
  },
]);