import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { deleteUser } from "../../../Services/UseCases/User/Delete";

export class DeleteUser {
  constructor() {
    makeAutoObservable(this);
  }

  async deleteUser() {
    try {
      const userData = await deleteUser();

      return Promise.resolve(userData);
    } catch (error) {
      console.error(error);

      toast.error("Não foi possível registrar a conta");

      return Promise.reject(error);
    }
  }
}
