import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorScreen } from "../screens/Error/ErrorScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
  },
]);
