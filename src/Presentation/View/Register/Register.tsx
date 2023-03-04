import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContainer } from "../../components/layouts/Container/User/UserContainer";
import { useUserController } from "../../Controller/User/useUserController";
import { RegisterForm } from "./Form/RegisterForm";

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, handleRegisterForm } = useUserController(navigate);

  return (
    <UserContainer>
      <ChevronLeft
        onClick={() => navigate("/usuario/login")}
        className="cursor-pointer"
      />
      <div
        id="sc-title-login-container"
        className="font-body text-3xl font-semibold text-center mt-10 lg:mt-14 2xl:mt-28 mb-8 xl:mb-12"
      >
        <h1>Criar conta</h1>
      </div>
      <div id="sc-input-login-container" className="flex flex-col items-center">
        <RegisterForm handleSubmitForm={handleRegisterForm} />
      </div>
    </UserContainer>
  );
};
