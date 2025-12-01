import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            index:true,
            path:'/',
            Component:Home,
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
        },
        {
            path:'/productdetails/:id',
            element:<ProductDetails></ProductDetails>,
            loader: ({params})=> fetch(`http://localhost:3000/productinfo/${params.id}`)
        }
    ]
  },
]);