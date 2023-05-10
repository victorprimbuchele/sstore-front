type GetRecoverPasswordCodeRequest = {
  email: string;
};

type RecoverPasswordRequest = {
  code: string;
  password: string;
};

type GetRecoverPasswordCodeResponse = {
  id: string;
  message: string;
};

export type {
  GetRecoverPasswordCodeRequest,
  RecoverPasswordRequest,
  GetRecoverPasswordCodeResponse,
};
