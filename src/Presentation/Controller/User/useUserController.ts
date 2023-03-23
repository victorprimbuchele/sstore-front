import { CreateRequestData } from "../../../Domain/Model/User/Create";
import userData from "../../../Data/User/UserData";
import userDomain from "../../../Domain/UseCase/User/User";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { LoginRequestData } from "../../../Domain/Model/User/Login";
import { UpdateUserRequestData } from "../../../Domain/Model/User/Update";
import { toast } from "react-toastify";
import { ChangePasswordRequest } from "../../../Domain/Model/User/ChangePassword";
import { ChangePasswordParamDataType } from "../../../Domain/UseCase/User/ChangePassword";

export const useUserController = (navigate?: NavigateFunction) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitRegisterForm = async (data: CreateRequestData) => {
    setIsLoading(true);

    try {
      await userDomain.register.registerUser(data);

      const loginData = {
        email: data.email,
        password: data.password,
      };

      await userDomain.login.login(loginData);

      await userDomain.userData.setUserData(userData);

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
    } catch (error) {
      console.error(error);

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

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const deleteAccount = async () => {
    try {
      setIsLoading(true);

      await userDomain.delete.deleteUser();

      localStorage.clear();

      if(navigate) navigate('/usuario/login');

      toast.success('Usuário excluído com sucesso.')

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  }

  const changeUserPassword = async (data: ChangePasswordParamDataType) => {
    try {
      await userDomain.changePassword.changePassword(data, userData);

      localStorage.clear();

      if(navigate) navigate('/usuario/login');

      toast.success('Senha alterada com sucesso. Faça login novamente.')

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
    changeUserPassword
  };
};
