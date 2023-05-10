import { CreateRequestData } from "../../../Domain/Model/User/Create";
import userData from "../../../Data/User/UserData";
import userDomain from "../../../Domain/UseCase/User/User";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { LoginRequestData } from "../../../Domain/Model/User/Login";
import { UpdateUserRequestData } from "../../../Domain/Model/User/Update";
import { toast } from "react-toastify";
import { ChangePasswordParamDataType } from "../../../Domain/UseCase/User/ChangePassword";
import { ActivateAccountRequest } from "../../../Domain/Model/User/Activate";
import { GetRecoverPasswordCodeRequest, RecoverPasswordRequest } from "../../../Domain/Model/User/RecoverPassword";

export const useUserController = (navigate?: NavigateFunction) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitRegisterForm = async (data: CreateRequestData) => {
    setIsLoading(true);

    try {
      await userDomain.register.registerUser(data, userData);

      if (navigate) navigate("/usuario/ativar-conta");

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const handleActivateAccount = async (data: ActivateAccountRequest) => {
    setIsLoading(true);

    try {
      await userDomain.activateAccount.activateAccount(data, userData);

      if (navigate) navigate("/usuario/login");

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const handleSubmitLoginForm = async (data: LoginRequestData) => {
    setIsLoading(true);
    try {
      await userDomain.login.login(data);

      await userDomain.userData.setUserData(userData);

      if (navigate) navigate("/usuario/minha-conta");

      setIsLoading(false);
    } catch (error: any) {
      console.error(error);

      if (error.response.status === 403) {
        const { data } = error.response.data;

        userData.setUser({
          cpf_cnpj: data.cpf_cnpj,
          email: data.email,
          id: data.id,
          name: data.name,
          phone: data.phone,
        });

        if (navigate) navigate("/usuario/ativar-conta");
      }

      setIsLoading(false);
    }
  };

  const handleSubmitUpdateUserForm = async (data: UpdateUserRequestData) => {
    try {
      await userDomain.update.updateUser(data, userData);

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

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

  const logoutUser = async () => {
    try {
      setIsLoading(true);

      await userDomain.logoff.logoff(userData);

      localStorage.clear();

      userData.resetUser();

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      localStorage.clear();

      userData.resetUser();

      setIsLoading(false);
    }
  };

  const deleteAccount = async () => {
    try {
      setIsLoading(true);

      await userDomain.delete.deleteUser();

      localStorage.clear();

      if (navigate) navigate("/usuario/login");

      toast.success("Usuário excluído com sucesso.");

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const changeUserPassword = async (data: ChangePasswordParamDataType) => {
    try {
      await userDomain.changePassword.changePassword(data, userData);

      localStorage.clear();

      if (navigate) navigate("/usuario/login");

      toast.success("Senha alterada com sucesso. Faça login novamente.");

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const handleRecoveryPasswordToGetCodeForm = async (
    data?: GetRecoverPasswordCodeRequest
  ) => {
    setIsLoading(true);

    try {
      await userDomain.recoverPassword.getRecoverPasswordCode(data);

      if (navigate) navigate("/esqueci-minha-senha/confirmar-codigo");

      toast.success("O código de recuperação foi enviado para o seu e-mail");

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const handleRecoverPasswordForm = async (
    data: RecoverPasswordRequest
  ) => {
    setIsLoading(true);

    try {
      await userDomain.recoverPassword.recoverPassword(data);

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  }

  return {
    isLoading,
    setIsLoading,
    handleRegisterForm: handleSubmitRegisterForm,
    handleLoginForm: handleSubmitLoginForm,
    handleUpdateForm: handleSubmitUpdateUserForm,
    getUserData,
    logoutUser,
    userData: userData.user,
    deleteAccount,
    changeUserPassword,
    handleActivateAccount,
    handleRecoveryPasswordToGetCodeForm,
    handleRecoverPasswordForm
  };
};
