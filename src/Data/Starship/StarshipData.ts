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
  }

  addStarship(starships: Starship) {
    addAnObjectToArray(this.starships, starships);
  }

  setStarships(starship: Array<Starship>) {
    this.starships = starship;
  }
}

export default new Startship();
