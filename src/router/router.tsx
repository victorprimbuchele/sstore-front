import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import { ErrorScreen } from "../Presentation/View/Error/ErrorScreen";
import { Home } from "../Presentation/View/Home/Home";
import { ProductsList } from "../Presentation/View/Products/List/ProductsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/produtos",
    element: <ProductsList />,
    errorElement: <ErrorScreen />,
  },
]);
