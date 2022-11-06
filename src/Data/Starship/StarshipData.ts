import { makeAutoObservable } from "mobx";
import { addAnObjectToArray } from "../../utils/addAnObjectToArray";
import { Starship, StarshipProps } from "./StarshipModel";

class Startship implements StarshipProps {
  starships = new Array<Starship>();

  constructor() {
    makeAutoObservable(this);
    this.starships;
    this.addStarship;
    this.setStarships;
    this.resetStarships;
  }

  addStarship(starships: Starship) {
    addAnObjectToArray(this.starships, starships);
  }

  setStarships(starship: Array<Starship>) {
    this.starships = starship;
  }

  resetStarships() {
    this.starships = [];
  }
}

export default new Startship();
