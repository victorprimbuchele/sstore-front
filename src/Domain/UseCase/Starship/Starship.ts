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
}

export default new Starship();
