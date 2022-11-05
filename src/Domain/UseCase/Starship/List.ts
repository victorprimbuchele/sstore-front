import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { StarshipProps } from "../../../Data/Starship/StarshipModel";
import { listProducts } from "../../../Services/UseCases/Product/List";
import { LoadingProps } from "../Generic/Loading";
import { PaginationProps } from "../Generic/Pagination";

export class StarshipList implements PaginationProps, LoadingProps {
  currentPage: number = 1;
  lastPage: number = 0;
  perPage: number = 0;
  dataLengthThisPage: number = 0;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.currentPage;
    this.setCurrentPage;
    this.lastPage;
    this.setLastPage;
    this.perPage;
    this.setPerPage;
    this.dataLengthThisPage;
    this.setDataLengthThisPage;
    this.isLoading;
    this.setIsLoading;
  }

  setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
  }

  setLastPage(lastPage: number) {
    this.lastPage = lastPage;
  }

  setPerPage(perPage: number) {
    this.perPage = perPage;
  }

  setDataLengthThisPage(dataLengthThisPage: number) {
    this.dataLengthThisPage = dataLengthThisPage;
  }

  set setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async setProductData(starships: StarshipProps) {
    try {
      this.setIsLoading = true;

      const starshipsList = await listProducts(this.currentPage);

      starships.setStarships(starshipsList.starships);

      this.setCurrentPage(starshipsList.currentPage);

      this.setLastPage(starshipsList.lastPage);

      this.setDataLengthThisPage(starshipsList.dataLengthThisPage);

      this.setIsLoading = false;

      return Promise.resolve(starshipsList);
    } catch (error) {
      console.error(error);

      this.setIsLoading = false;

      toast.error("Houve um erro ao buscar os produtos");

      return Promise.reject(error);
    }
  }
}
