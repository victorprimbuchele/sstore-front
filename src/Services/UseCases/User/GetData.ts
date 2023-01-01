import { UserDataResponseData } from "../../../Domain/Model/User/UserData";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function userGetData(): Promise<UserDataResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.get<UserDataResponseData>(
        `/user`
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
