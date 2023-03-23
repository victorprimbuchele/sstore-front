import { UserDataResponseData } from "../../../Domain/Model/User/UserData";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function logoff(): Promise<UserDataResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      await SpacecraftstoreAPI.get<UserDataResponseData>(
        "/logoff"
      );

      return resolve({
        id: 0,
        name: '',
        email: '',
        phone: '',
        cpf_cnpj: '',
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
