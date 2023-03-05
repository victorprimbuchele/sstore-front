import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { userUpdate } from "../../../Services/UseCases/User/Update";
import { UserProps } from "../../../Data/User/UserModel";
import { UpdateUserRequestData } from "../../Model/User/Update";

export class UpdateUser {
  constructor() {
    makeAutoObservable(this);
  }

  async updateUser(data: UpdateUserRequestData, user: UserProps) {
    try {
      const userData = await userUpdate(data, user.user.id);

      user.setUser(userData);

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Há algo de errado com suas credenciais de acesso");

      return Promise.reject(error);
    }
  }
}
