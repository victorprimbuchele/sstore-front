import { Route, Routes } from "react-router-dom";
import { ActivateAccount } from "../Presentation/View/ActivateAccount/ActivateAccount";
// import App from "../App";
import { ErrorScreen } from "../Presentation/View/Error/ErrorScreen";
import { Home } from "../Presentation/View/Home/Home";
import { Login } from "../Presentation/View/Login/Login";
import { ProductsList } from "../Presentation/View/Products/List/ProductsList";
import { Register } from "../Presentation/View/Register/Register";
import { UserAccount } from "../Presentation/View/User/Account/UserAccount";
import { RecoveryPassword } from "../Presentation/View/RecoveryPassword/RecoveryPassword";
import { RecoveryCodePassword } from "../Presentation/View/RecoveryCodePassword/RecoveryCodePassword";

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
    <Route path="/usuario" errorElement={<ErrorScreen />}>
      <Route path="login" element={<Login />} errorElement={<ErrorScreen />} />
      <Route path="minha-conta" element={<UserAccount />} />
    </Route>
    <Route
      path="/novo-usuario"
      element={<Register />}
      errorElement={<ErrorScreen />}
    />
    <Route
      path="/usuario/ativar-conta"
      element={<ActivateAccount />}
      errorElement={<ErrorScreen />}
    />
    <Route
      path="/esqueci-minha-senha"
      element={<RecoveryPassword />}
      errorElement={<ErrorScreen />}
    />
    <Route
      path="/esqueci-minha-senha/confirmar-codigo"
      element={<RecoveryCodePassword />}
      errorElement={<ErrorScreen />}
    />
  </Routes>
);
