import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./router/router";
import { useUserController } from "./Presentation/Controller/User/useUserController";
import { useCallback, useEffect, useMemo } from "react";

function App() {
  const { getUserData, isLoading } = useUserController();

  const getKey = useCallback(
    () => localStorage.getItem("c838d0fb656e604ef7e12074b7caa1e3"),
    []
  );

  useMemo(() => {
    if (getKey()) {
      if (!isLoading) {
        getUserData();
      }
    }
  }, [getKey]);

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer className="leading-snug" />
    </>
  );
}

export default App;
