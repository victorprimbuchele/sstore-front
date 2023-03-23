import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { UserProps } from "../../../Data/User/UserModel";
import { changePassword } from "../../../Services/UseCases/User/ChangePassword";

export type ChangePasswordParamDataType = {
  actualPass: string;
  newPass: string;
};

export class ChangeUserPassword {
  constructor() {
    makeAutoObservable(this);
  }

  async changePassword(data: ChangePasswordParamDataType, user: UserProps) {
    try {
      const bindedData = {
        new_password: data.newPass,
        password: data.actualPass,
      };

      const userData = await changePassword(bindedData, user.user.id);

      user.setUser(userData);

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Há algo de errado com suas credenciais de acesso");

      return Promise.reject(error);
    }
  }
}
