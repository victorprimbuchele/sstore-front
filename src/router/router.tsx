import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import { ErrorScreen } from "../Presentation/View/Error/ErrorScreen";
import { Home } from "../Presentation/View/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />,
  },
  
]);
