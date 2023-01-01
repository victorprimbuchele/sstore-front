export type UserModel = {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf_cnpj: string;
}

export interface UserProps {
    user: UserModel;
    setUser: (user: UserModel) => void;
    tokenKey: string;
    setTokenKey: string;
}