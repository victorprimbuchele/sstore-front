export interface CreateRequestData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateResponseData {
  email: string;
  name: string;
  id: number;
}
