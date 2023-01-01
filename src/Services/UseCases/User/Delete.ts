import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function deleteUser(): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.delete("/user");

      return resolve(data);
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
