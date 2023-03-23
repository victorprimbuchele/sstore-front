import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./router/router";
import { useUserController } from "./Presentation/Controller/User/useUserController";
import { useMemo, useState } from "react";
import { observer } from "mobx-react";
import userDomain from "./Domain/UseCase/User/User";
import userData from "./Data/User/UserData";

function App() {
  const { isLoading, setIsLoading } = useUserController();

  const getUserData = async () => {
    try {
      setIsLoading(true);

      await userDomain.userData.setUserData(userData);

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const [renderCount, setRenderCount] = useState(0);

  useMemo(() => {
    if (localStorage.getItem("c838d0fb656e604ef7e12074b7caa1e3") ) {
      if (!isLoading) {
        if (renderCount === 0) {
          setRenderCount(1);
          getUserData();
        }
      }
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer className="leading-snug" />
    </>
  );
}

export default observer(App);
