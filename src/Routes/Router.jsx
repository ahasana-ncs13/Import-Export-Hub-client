import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyImports from "../Pages/MyImports/MyImports";
import AddExports from "../Pages/AddExports/AddExports";
import MyExports from "../Pages/MyExports/MyExports";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HowItWorksTimeline from "../Pages/HowItWorks/HowItWorksTimeline";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allproducts",
        Component: AllProducts,
        loader: () =>
          fetch("https://import-export-hub-server-phi.vercel.app/productinfo"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },

      {
        path:"/aboutus",
        Component:AboutUs
      },
      {
        path:"/howitworkstimeline",
        Component:HowItWorksTimeline
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://import-export-hub-server-phi.vercel.app/productinfo/${params.id}`
          ),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },
      {
        path: "/myimports",
        element: (
          <PrivateRoutes>
            <MyImports></MyImports>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addexports",
        element: (
          <PrivateRoutes>
            <AddExports></AddExports>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myexports",
        element: (
          <PrivateRoutes>
            <MyExports></MyExports>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://import-export-hub-server-phi.vercel.app/myimports"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },
    ],
  },
]);
