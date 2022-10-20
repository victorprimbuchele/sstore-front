import { ListResponse, ListResponseData } from "../../../Domain/Model/Product/List";
import { SpacecraftstoreAPI } from "../../../Infra/SpacecraftStore/SpacecraftstoreAPI";

export function listProducts(): Promise<ListResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await SpacecraftstoreAPI.get<ListResponseData>(
        "/api/products"
      );



      return resolve({
        products: data.data,
        currentPage: data.current_page,
      });
    } catch (error) {
      console.error(error);

      return reject(error);
    }
  });
}
