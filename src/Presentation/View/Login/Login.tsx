import { UserContainer } from "../../components/layouts/Container/User/UserContainer";
import { BackToHomeLink } from "../../components/Link/BackToHome/BackToHomeLink";
import { useUserController } from "../../Controller/User/useUserController";
import { LoginForm } from "./Form/LoginForm";

export const Login: React.FC = () => {
  const { isLoading, handleLoginForm, navigate } = useUserController();

  return (
    <UserContainer>
      <BackToHomeLink />
      <div
        id="sc-title-login-container"
        className="font-brand text-3xl font-bold text-center mt-10 lg:mt-14 2xl:mt-28 mb-12 2xl:mb-24"
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
          className="block text-center text-sm sm:text-base font-body text-gray-600 hover:underline mb-24 xl:mb-36"
        >
          Esqueci minha senha
        </a>
      </div>
      <div id="sc-new-register-link-container" className="text-center">
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
    </UserContainer>
  );
};
