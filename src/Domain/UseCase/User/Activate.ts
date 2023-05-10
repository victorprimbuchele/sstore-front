import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { activate } from "../../../Services/UseCases/User/Activate";
import { UserProps } from "../../../Data/User/UserModel";
import { ActivateAccountRequest } from "../../Model/User/Activate";

export class ActivateAccount {
  constructor() {
    makeAutoObservable(this);
  }

  async activateAccount(data: ActivateAccountRequest, user: UserProps) {
    try {
      const userData = await activate(data, user.user.id);

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Há algo de errado com suas credenciais de acesso");

      return Promise.reject(error);
    }
  }
}
