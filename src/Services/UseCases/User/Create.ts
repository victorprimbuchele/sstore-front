import { CreateRequestData, CreateResponseData } from "../../../Domain/Model/User/Create";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function userCreate(dataToCreateUser: CreateRequestData): Promise<CreateResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.post<CreateResponseData>(
        "/user/register", dataToCreateUser
      );

      return resolve({
        email: data.email,
        name: data.name,
        id: data.id,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
