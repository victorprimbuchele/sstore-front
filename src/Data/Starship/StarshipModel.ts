
export type Starship = {
  mglt: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
};

export interface StarshipProps {
  starships: Starship[];
  setStarships: (product: Starship[]) => void;
  addStarship: (product: Starship) => void;
}
