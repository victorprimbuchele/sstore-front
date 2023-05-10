import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import {
  GetRecoverPasswordCodeRequest,
  RecoverPasswordRequest,
} from "../../Model/User/RecoverPassword";
import {
  getRecoverPasswordCode,
  recoverPassword,
} from "../../../Services/UseCases/User/RecoverPassword";

export class RecoverUserPassword {
  private _id: string = "0";
  private _email: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getRecoverPasswordCode(email?: GetRecoverPasswordCodeRequest) {
    try {
      if (!email) {
        email = {
          email: this._email,
        };
      }

      const { id } = await getRecoverPasswordCode(email);

      this._id = id;
      this._email = email.email;

      return Promise.resolve();
    } catch (error: any) {
      console.error(error);

      toast.error(error.response.message);

      return Promise.reject(error);
    }
  }

  async recoverPassword(data: RecoverPasswordRequest) {
    try {
      await recoverPassword(data, this._id, this._email);

      return Promise.resolve();
    } catch (error: any) {
      console.error(error);

      toast.error(error.response.message);

      return Promise.reject(error);
    }
  }
}
