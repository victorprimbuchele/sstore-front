import { makeAutoObservable } from "mobx";
import { UserModel, UserProps } from './UserModel';

class User implements UserProps {
    initialUser: UserModel = {
        cpf_cnpj: '',
        email: '',
        id: 0,
        name: '',
        phone: '',
    };

    private _user: UserModel = this.initialUser;

    private _tokenKey = '';

    constructor() {
        makeAutoObservable(this);
        this.user;
        this.setUser;
        this.setTokenKey;
    }

    setUser(user: UserModel) {
        this._user = user;
    }

    resetUser() {
        this._user = this.initialUser;
    }

    get user() {
        return this._user;
    }

    set setTokenKey(key: string) {
        this._tokenKey = key;
    }

    get tokenKey() {
        return this._tokenKey;
    }


}

export default new User();