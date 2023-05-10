import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContainer } from "../../components/layouts/Container/User/UserContainer";
import { BackToHomeLink } from "../../components/Link/BackToHome/BackToHomeLink";
import { useUserController } from "../../Controller/User/useUserController";
import { LoginForm } from "./Form/LoginForm";

export const Login: React.FC = observer(() => {
  const navigate = useNavigate();

  const { isLoading, handleLoginForm, userData } = useUserController(navigate);

  useEffect(() => {
    if (
      userData.email &&
      localStorage.getItem("c838d0fb656e604ef7e12074b7caa1e3")
    ) {
      navigate("/usuario/minha-conta");
    }
  }, [userData.email]);

  return (
    <UserContainer>
      <BackToHomeLink />

      <div className="flex flex-col justify-center h-full">
        <div
          id="sc-title-login-container"
          className="font-brand text-3xl font-bold text-center 2xl:mt-20 mb-12 2xl:mb-18"
        >
          <h1>SPACECRAFT</h1>
        </div>
        <div
          id="sc-input-login-container"
          className="sm:flex sm:flex-col sm:items-center"
        >
          <LoginForm handleLoginForm={handleLoginForm} />
        </div>
        <div id="sc-btn-n-forget-login-container" className="sm:mt-5">
          <a
            href="/esqueci-minha-senha"
            className="block text-center text-sm sm:text-base font-body text-gray-600 hover:underline mb-24 w-fit mx-auto"
          >
            Esqueci minha senha
          </a>
        </div>
        <div id="sc-new-register-link-container" className="text-center pb-1">
          <p className="font-body text-sm sm:text-base">
            Não possui uma conta?{" "}
            <a
              href="/novo-usuario"
              className="text-dark-pastel-blue text-sm sm:text-base font-body font-semibold hover:underline"
            >
              Clique aqui!
            </a>
          </p>
        </div>
      </div>
    </UserContainer>
  );
});
