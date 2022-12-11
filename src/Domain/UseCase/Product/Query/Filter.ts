import { makeAutoObservable } from "mobx";
import { LoadingProps } from "../../Generic/Loading";
import queries from "../../../../Data/Products/Queries/ProductQueryData";
import { FiltersData, QueriesData } from "../../../Model/Product/Query";
import { toast } from "react-toastify";
import { getPossibleProductQueries } from "../../../../Services/UseCases/Product/Query";

class ProductsQuery implements LoadingProps {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.isLoading;
    this.setIsLoading;
    this.setQueries;
    this.setFilter;
    this.setSearches;
    this.reset;
  }

  get queries() {
    return queries.queries;
  }

  get filters() {
    return queries.filters;
  }

  get searches() {
    return queries.searches;
  }

  set setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setQueries() {
    queries.setQueriesData(queries.filters);
  }

  setFilter(filters: FiltersData) {
    queries.setFiltersData(filters);
  }

  setSearches(searchesData: Array<string>) {
    queries.setSearchesData(searchesData);
  }

  reset() {
    queries.resetQueries();
  }

  async fetchQueries(): Promise<QueriesData> {
    try {
      return await getPossibleProductQueries();
    } catch (error) {
      console.error(error);

      this.setIsLoading = false;

      toast.error("Houve um erro ao buscar os filtros");

      return Promise.reject(error);
    }
  }

  async setFiltersAndSearches(): Promise<void> {
    try {
      this.reset();

      const queriesData = await this.fetchQueries();

      this.setFilter(queriesData.filters);

      this.setSearches(queriesData.searches);
    } catch (error: any) {
      console.error(error + "Houve um erro ao setar as queries");
    }
  }
}

export default new ProductsQuery();
