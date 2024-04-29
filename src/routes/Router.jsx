import { createBrowserRouter } from "react-router-dom";

import Root from "../Layouts/Root";
import Cards from "../pages/Cards";
import Stops from "../pages/Stops";
import AddedSpot from "../pages/AddedSpot";
import List from "../pages/List";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CardsDetails from "../pages/CardsDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot')
      },
     
      {
        path: "/stops",
        element: <Stops></Stops>
      },
      {
        path: "/add",
        element: <PrivateRoute><AddedSpot></AddedSpot></PrivateRoute>
      },
      {
        path: "/list",
        element: <PrivateRoute><List></List></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:'/cards/:id',
        element: <CardsDetails></CardsDetails>,
        loader: () => fetch(`http://localhost:5000/spot`)
      }
    ]
  },
  
  
]);
export default router;