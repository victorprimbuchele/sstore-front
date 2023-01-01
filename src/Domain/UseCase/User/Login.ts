import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { login } from "../../../Services/UseCases/User/Login";
import { LoginRequestData } from "../../Model/User/Login";
import { sha1 } from "crypto-hash";
import { UserProps } from "../../../Data/User/UserModel";

export class Login {
  constructor() {
    makeAutoObservable(this);
  }

  async login(data: LoginRequestData, user: UserProps) {
    try {
      const userData = await login(data);

      const tokenKey = await sha1("token");

      user.setTokenKey = tokenKey;

      localStorage.setItem("c838d0fb656e604ef7e12074b7caa1e3", tokenKey);

      localStorage.setItem(tokenKey, userData.plainTextToken);

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Há algo de errado com suas credenciais de acesso");

      return Promise.reject(error);
    }
  }
}
