import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      }
    ]
  },
]);

export default router