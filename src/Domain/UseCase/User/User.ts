import { DeleteUser } from "./Delete";
import { GetUser } from "./Get";
import { RegisterUser } from "./Register";
import { Login } from "./Login";
import { makeAutoObservable } from "mobx";
import { LoadingProps } from "../Generic/Loading";
import { UpdateUser } from "./Update";

class User implements LoadingProps {
  private deleteUser = new DeleteUser();
  private getUser = new GetUser();
  private registerUser = new RegisterUser();
  private loginUser = new Login();
  private updateUser = new UpdateUser();
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.isLoading;
  }

  set setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  get register() {
    return this.registerUser;
  }

  get userData() {
    return this.getUser;
  }

  get login() {
    return this.loginUser;
  }

  get delete() {
    return this.deleteUser;
  }

  get update() {
    return this.updateUser;
  }
}

export default new User();
