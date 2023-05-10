import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContainer } from "../../components/layouts/Container/User/UserContainer";
import { useUserController } from "../../Controller/User/useUserController";
import { RecoveryCodePasswordForm } from "./Form/RecoveryCodePasswordForm";

export const RecoveryCodePassword = () => {
  const navigate = useNavigate();

  const { handleRecoverPasswordForm, handleRecoveryPasswordToGetCodeForm } =
    useUserController(navigate);

  return (
    <UserContainer>
      <ChevronLeft
        onClick={() => navigate("/esqueci-minha-senha")}
        className="cursor-pointer"
      />
      <div className="flex flex-col justify-evenly h-full pb-4">
        <div
          id="sc-recover-password-title-container"
          className="font-body text-xl sm:text-2xl xl:text-3xl font-semibold text-center mt-10 lg:mt-14 2xl:mt-28"
        >
          <h1>Cadastre uma nova senha</h1>
        </div>
        <div
          id="sc-recover-password-form-container"
          className="sm:flex sm:flex-col sm:items-center"
        >
          <RecoveryCodePasswordForm
            handleSubmitForm={handleRecoverPasswordForm}
          />
        </div>

        <div
          id="sc-recover-password-resend-code-container"
          className="text-center"
        >
          <p className="font-body text-sm sm:text-base">
            Não recebeu ou seu código expirou?{" "}
            <button
              className="text-dark-pastel-blue text-sm sm:text-base font-body font-semibold hover:underline"
              onClick={() => handleRecoveryPasswordToGetCodeForm()}
            >
              Reenviar código
            </button>
          </p>
        </div>
      </div>
    </UserContainer>
  );
};
