import { UpdateUserRequestData } from "../../../Domain/Model/User/Update";
import { UserDataResponseData } from "../../../Domain/Model/User/UserData";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function userUpdate(updateData: UpdateUserRequestData, userId: number): Promise<UserDataResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.put<UserDataResponseData>(
        `/user/${userId}`, updateData
      );

      return resolve({
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        cpf_cnpj: data.cpf_cnpj,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
