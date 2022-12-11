import {
  ListResponse,
  ListResponseData,
} from "../../../Domain/Model/Product/List";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";
import { urlQueryBuilder } from "../../../utils/urlQueryBuilder";

export function listProducts(
  page: number,
  queryKey: string,
  queryValue: string
): Promise<ListResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await SpacecraftstoreAPI.get<ListResponseData>(
        `/products?page=${page}` + urlQueryBuilder(queryKey, queryValue)
      );

      return resolve({
        starships: data.data,
        currentPage: data.current_page,
        lastPage: data.last_page,
        perPage: data.per_page,
        dataLengthThisPage: data.to + 1 - data.from,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
