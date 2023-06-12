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
import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Payments from "../pages/Dashboard/MyClasses/Payments/payments";

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
        },
        {
          path: 'manageClasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'addClass',
          element: <AddClasses></AddClasses>
        },
        {
          path: 'myClasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'selectedClasses',
          element: <SelectedClasses></SelectedClasses>
        },
        {
          path: 'enrolledClasses',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path:'payment',
          element:<Payments></Payments>
        }
      ]
    }
  ]);