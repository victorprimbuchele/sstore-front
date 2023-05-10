import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { UserProps } from "../../../Data/User/UserModel";
import { userCreate } from "../../../Services/UseCases/User/Create";
import { CreateRequestData } from "../../Model/User/Create";

export class RegisterUser {
  constructor() {
    makeAutoObservable(this);
  }

  async registerUser(data: CreateRequestData, user: UserProps) {
    try {
      const userData = await userCreate(data);

      user.setUser({
        cpf_cnpj: user.user.cpf_cnpj,
        phone: user.user.phone,
        id: userData.id,
        email: userData.email,
        name: userData.name,
      });

      toast.success("Usuário cadastrado com sucesso");

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Não foi possível registrar a conta");

      return Promise.reject(error);
    }
  }
}
