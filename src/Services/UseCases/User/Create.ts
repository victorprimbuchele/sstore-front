import { AxiosResponse } from "axios";
import {
  CreateRequestData,
  CreateResponseData,
} from "../../../Domain/Model/User/Create";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function userCreate(
  dataToCreateUser: CreateRequestData
): Promise<CreateResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.post<
        AxiosResponse<CreateResponseData>
      >("/user/register", dataToCreateUser);

      return resolve({
        email: data.data.email,
        name: data.data.name,
        id: data.data.id,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
