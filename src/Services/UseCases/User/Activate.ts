import { AxiosResponse } from "axios";
import { ActivateAccountRequest } from "../../../Domain/Model/User/Activate";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function activate(
  code: ActivateAccountRequest,
  userId: string | number
): Promise<AxiosResponse<void>> {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await SpacecraftstoreAPI.put<void>(
        `/user/${userId}/activate`,
        code
      );

      return resolve(data);
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
