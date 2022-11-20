import { createBrowserRouter, Route, Routes } from "react-router-dom";
// import App from "../App";
import { ErrorScreen } from "../Presentation/View/Error/ErrorScreen";
import { Home } from "../Presentation/View/Home/Home";
import { ProductsList } from "../Presentation/View/Products/List/ProductsList";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} errorElement={<ErrorScreen />} />
    <Route
      path="/produtos"
      element={<ProductsList />}
      errorElement={<ErrorScreen />}
    >
      <Route
        path=":filterType/:filterId"
        element={<ProductsList />}
        errorElement={<ErrorScreen />}
      />
    </Route>
  </Routes>
);
