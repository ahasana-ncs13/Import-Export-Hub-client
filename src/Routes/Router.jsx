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
import BlogsDetails from "../Component/BlogsDetails";
import Loader from "../Component/Loading/Loader";
import DashboardLayout from "../Dasboard/DashboardLayout/DashboardLayout";
import ImporterDashboard from "../Dasboard/ImporterDasboard/ImporterDasboard";
import ExporterDashboard from "../Dasboard/ExporterDashboard/ExporterDashboard";
import PricingQuote from "../Pages/PricingQuote/PricingQuote";
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
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/howitworkstimeline",
        Component: HowItWorksTimeline,
      },
      {
        path: "/pricingquote",
        Component: PricingQuote,
      },
      {
        path: "/blogsdeatails/:id",
        Component: BlogsDetails,
        loader: ({params}) => fetch(`https://import-export-hub-server-phi.vercel.app/blogs/${params.id}`),
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://import-export-hub-server-phi.vercel.app/productinfo/${params.id}`
          ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/dashboardLayout",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index:true,
        path: "/dashboardLayout/myimports",
        element: (
          <PrivateRoutes>
            <MyImports></MyImports>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboardLayout/importerdashboard",
        element: (
          <PrivateRoutes>
            <ImporterDashboard></ImporterDashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboardLayout/exporterdashboard",
        element: (
          <PrivateRoutes>
            <ExporterDashboard></ExporterDashboard>
          </PrivateRoutes>
        ),
      },
       {
        path: "/dashboardLayout/addexports",
        element: (
          <PrivateRoutes>
            <AddExports></AddExports>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboardLayout/myexports",
        element: (
          <PrivateRoutes>
            <MyExports></MyExports>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://import-export-hub-server-phi.vercel.app/myimports"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      
    ],
  },
]);
