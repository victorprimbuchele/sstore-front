import { makeAutoObservable } from "mobx";
import { UserProps } from "../../../Data/User/UserModel";
import { logoff } from "../../../Services/UseCases/User/Logoff";

export class Logoff {
  constructor() {
    makeAutoObservable(this);
  }

  async logoff(user: UserProps) {
    try {
      const message = await logoff();

      user.setUser({
        cpf_cnpj: "",
        email: "",
        id: 0,
        name: "",
        phone: "",
      });

      Promise.resolve(message);
    } catch (error) {
      console.error(error);

      return Promise.reject(error);
    }
  }
}
