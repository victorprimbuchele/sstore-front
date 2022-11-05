import { ListResponse, ListResponseData } from "../../../Domain/Model/Product/List";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function listProducts(page: number): Promise<ListResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await SpacecraftstoreAPI.get<ListResponseData>(
        `/products?page=${page}`
      );

      return resolve({
        starships: data.data,
        currentPage: data.current_page,
        lastPage: data.last_page,
        perPage: data.per_page,
        dataLengthThisPage: data.to + 1 - data.from
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
