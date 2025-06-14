// router.js or routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Project from "../pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />, 
      },
      {
        path: "project/:id",
        element: <Project />, 
      },
    ],
  }
]);

export default router;
