import { makeAutoObservable } from "mobx";
import { StarshipList } from "./List";
import starships from "../../../Data/Starship/StarshipData";

class Starship {
  listStarships = new StarshipList();

  constructor() {
    makeAutoObservable(this);
    this.listStarships;
    this.starships;
    this.isLoading;
    this.currentPage;
    this.setCurrentPage;
    this.lastPage;
    this.perPage;
    this.dataLengthThisPage;
    this.fetchStarships;
    this.reset;
  }

  get queryKey() {
    return this.listStarships.queryKey;
  }

  get queryValue() {
    return this.listStarships.queryValue;
  }

  set setQueryKey(queryKey: string) {
    this.listStarships.queryKey = queryKey;
  }

  set setQueryValue(queryValue: string) {
    this.listStarships.queryValue = queryValue;
  }

  get starships() {
    return starships.starships;
  }

  get isLoading() {
    return this.listStarships.isLoading;
  }

  get currentPage() {
    return this.listStarships.currentPage;
  }

  setCurrentPage(currentPage: number): void {
    this.listStarships.setCurrentPage(currentPage);
  }

  get lastPage() {
    return this.listStarships.lastPage;
  }

  get perPage() {
    return this.listStarships.perPage;
  }

  get dataLengthThisPage() {
    return this.listStarships.dataLengthThisPage;
  }

  async fetchStarships() {
    await this.listStarships.setProductData(starships);
  }

  reset() {
    starships.resetStarships();
    this.listStarships.resetCurrentPage();
  }
}

export default new Starship();
