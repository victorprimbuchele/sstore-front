import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { login } from "../../../Services/UseCases/User/Login";
import { LoginRequestData } from "../../Model/User/Login";

export class Login {
  constructor() {
    makeAutoObservable(this);
  }

  async login(data: LoginRequestData) {
    try {
      const { plainTextToken } = await login(data);

      localStorage.setItem("c838d0fb656e604ef7e12074b7caa1e3", plainTextToken);

      return Promise.resolve(plainTextToken);
    } catch (error) {
      console.error(error);

      toast.error("Há algo de errado com suas credenciais de acesso");

      return Promise.reject(error);
    }
  }
}
