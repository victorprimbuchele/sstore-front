import { AxiosResponse } from "axios";
import { ChangePasswordRequest } from "../../../Domain/Model/User/ChangePassword";
import { UserDataResponseData } from "../../../Domain/Model/User/UserData";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function changePassword(
  passwordData: ChangePasswordRequest,
  userId: number
): Promise<UserDataResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.put<AxiosResponse<UserDataResponseData>>(
        `/user/password/${userId}`,
        passwordData
      );

      return resolve({
        id: data.data.id,
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone,
        cpf_cnpj: data.data.cpf_cnpj,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
