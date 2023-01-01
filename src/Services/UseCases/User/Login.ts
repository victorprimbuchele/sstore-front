import { LoginRequestData, LoginResponseData } from "../../../Domain/Model/User/Login";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function login(credentials: LoginRequestData): Promise<LoginResponseData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.post<LoginResponseData>(
        "/login", credentials
      );

      return resolve({
        plainTextToken: data.plainTextToken
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
