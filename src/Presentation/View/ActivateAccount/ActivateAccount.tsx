import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContainer } from "../../components/layouts/Container/User/UserContainer";
import { useUserController } from "../../Controller/User/useUserController";
import { ActivateAccountForm } from "./Form/ActivateAccountForm";

export const ActivateAccount: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, handleActivateAccount, userData } =
    useUserController(navigate);

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
        <h1>Ativar conta</h1>
      </div>
      <div id="sc-input-login-container" className="flex flex-col items-center">
        <ActivateAccountForm
          handleSubmitForm={handleActivateAccount}
          userEmail={userData.email}
        />
      </div>
    </UserContainer>
  );
};
