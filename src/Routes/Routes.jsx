import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import InstructorPage from "../pages/Instructor/InstructorPage";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Classes from "../pages/Home/Classes/Classes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/instructor",
          element: <InstructorPage></InstructorPage>
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);