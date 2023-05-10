import { AxiosResponse } from "axios";
import {
  GetRecoverPasswordCodeRequest,
  GetRecoverPasswordCodeResponse,
  RecoverPasswordRequest,
} from "../../../Domain/Model/User/RecoverPassword";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

function getRecoverPasswordCode(
  email: GetRecoverPasswordCodeRequest
): Promise<{ id: string }> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.put<
        AxiosResponse<GetRecoverPasswordCodeResponse>
      >(`/user/recover-password`, email);

      console.log(data);

      return resolve({
        id: data.data.id,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}

function recoverPassword(
  data: RecoverPasswordRequest,
  userId: string,
  email: string
): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      await SpacecraftstoreAPI.put<AxiosResponse<void>>(
        `/user/${userId}/recover-password`,
        { ...data, email }
      );
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}

export { getRecoverPasswordCode, recoverPassword };
