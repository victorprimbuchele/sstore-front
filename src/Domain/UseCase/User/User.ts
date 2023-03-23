import { DeleteUser } from "./Delete";
import { GetUser } from "./Get";
import { RegisterUser } from "./Register";
import { Login } from "./Login";
import { makeAutoObservable } from "mobx";
import { LoadingProps } from "../Generic/Loading";
import { UpdateUser } from "./Update";
import { Logoff } from "./Logoff";
import { ChangeUserPassword } from "./ChangePassword";

class User implements LoadingProps {
  private deleteUser = new DeleteUser();
  private getUser = new GetUser();
  private registerUser = new RegisterUser();
  private loginUser = new Login();
  private updateUser = new UpdateUser();
  private logoffUser = new Logoff();
  private changeUserPassword = new ChangeUserPassword();
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

  get logoff() {
    return this.logoffUser;
  }

  get changePassword() {
    return this.changeUserPassword;
  }
}

export default new User();
