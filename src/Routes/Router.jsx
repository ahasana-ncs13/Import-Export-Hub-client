import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            index:true,
            path:'/',
            Component:Home,
            // loader: ({params}) => fetch(`http://localhost:3000/productinfo/${params.id}`)
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/allproducts',
            Component:AllProducts,
             loader: () => fetch('http://localhost:3000/productinfo')
        }
    ]
  },
]);