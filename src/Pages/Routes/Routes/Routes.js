import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
]);
export default router;
