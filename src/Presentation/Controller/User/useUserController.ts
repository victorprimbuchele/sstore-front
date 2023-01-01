import { CreateRequestData } from "../../../Domain/Model/User/Create";
import userData from "../../../Data/User/UserData";
import userDomain from "../../../Domain/UseCase/User/User";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequestData } from "../../../Domain/Model/User/Login";

export const useUserController = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitRegisterForm = async (data: CreateRequestData) => {
    setIsLoading(true);

    try {
      await userDomain.register.registerUser(data);

      const loginData = {
        email: data.email,
        password: data.password,
      };

      await userDomain.login.login(loginData, userData);

      await userDomain.userData.setUserData(userData);

      navigate("/usuario/login");

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  const handleSubmitLoginForm = async (data: LoginRequestData) => {
    setIsLoading(true);
    try {
      await userDomain.login.login(data, userData);

      await userDomain.userData.setUserData(userData);

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  return {
    isLoading: isLoading,
    handleRegisterForm: handleSubmitRegisterForm,
    handleLoginForm: handleSubmitLoginForm,
    navigate,
  };
};
