import {
  QueriesData,
} from "../../../Domain/Model/Product/Query";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function getPossibleProductQueries(): Promise<QueriesData> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.get<QueriesData>(
        "/products/getTypesOfQuery"
      );

      return resolve({
        filters: data.filters,
        searches: data.searches,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
