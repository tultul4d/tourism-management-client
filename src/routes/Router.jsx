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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      
      {
        path: "/home",
        element: <Home></Home>,
      },
     
      {
        path: "/stops",
        element: <Stops></Stops>
      },
      {
        path: "/add",
        element: <AddedSpot></AddedSpot>
      },
      {
        path: "/list",
        element: <List></List>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  
  
]);
export default router;