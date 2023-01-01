export interface LoginRequestData {
    email: string;
    password: string;
}

export interface LoginResponseData {
    plainTextToken: string;
}
