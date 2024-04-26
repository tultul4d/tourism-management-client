import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>
    },
  ]);
    

export default routes;