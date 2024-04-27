import { createBrowserRouter } from "react-router-dom";

import Root from "../Layouts/Root";
import Cards from "../pages/Cards";
import Stops from "../pages/Stops";
import AddedSpot from "../pages/AddedSpot";
import List from "../pages/List";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage";



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
        path: "/card",
        element: <Cards></Cards>
      },
      {
        path: "/add",
        element: <AddedSpot></AddedSpot>
      },
      {
        path: "/list",
        element: <List></List>
      }
    ]
  },
  
  
]);
export default router;