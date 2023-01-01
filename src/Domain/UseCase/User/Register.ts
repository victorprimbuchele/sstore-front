import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { userCreate } from "../../../Services/UseCases/User/Create";
import { CreateRequestData } from "../../Model/User/Create";

export class RegisterUser {
  constructor() {
    makeAutoObservable(this);
  }

  async registerUser(data: CreateRequestData) {
    try {
      const userData = await userCreate(data);

      toast.success("Usuário cadastrado com sucesso");

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Não foi possível registrar a conta");

      return Promise.reject(error);
    }
  }
}
