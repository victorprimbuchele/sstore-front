import { makeAutoObservable } from "mobx";
import { UserProps } from "../../../Data/User/UserModel";
import { userGetData } from "../../../Services/UseCases/User/GetData";

export class GetUser {
  constructor() {
    makeAutoObservable(this);
  }

  async setUserData(user: UserProps) {
    try {
      const userData = await userGetData();

      user.setUser(userData);

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      return Promise.reject(error);
    }
  }
}
