import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContainer } from "../../components/layouts/Container/User/UserContainer";
import { RecoveryPasswordForm } from "./Form/RecoveryPasswordForm";
import { useUserController } from "../../Controller/User/useUserController";

export const RecoveryPassword: React.FC = () => {
  const navigate = useNavigate();

  const { handleRecoveryPasswordToGetCodeForm } = useUserController(navigate);

  return (
    <UserContainer>
      <ChevronLeft
        onClick={() => navigate("/usuario/login")}
        className="cursor-pointer"
      />
      <div className="flex flex-col justify-center h-full">
        <div
          id="sc-title-login-container"
          className="font-body text-xl sm:text-2xl xl:text-3xl font-semibold text-center 2xl:mt-28 mb-12 lg:20 xl:mb-24"
        >
          <h1>Recuperar senha</h1>
        </div>
        <div
          id="sc-input-login-container"
          className="sm:flex sm:flex-col sm:items-center"
        >
          <RecoveryPasswordForm
            handleRecoveryPasswordForm={handleRecoveryPasswordToGetCodeForm}
          />
        </div>
      </div>
    </UserContainer>
  );
};
