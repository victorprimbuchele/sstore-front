export interface QueriesResponse {
  data: QueriesData;
}

export interface QueriesData {
  filters: FiltersData;
  searches: Array<string>;
}

export type FiltersData = {
  manufacturer: ManufacturerData[];
  starship_class: StarshipClassData;
};


export type ManufacturerData = {
  manufacturer: string;
};

export type StarshipClassData = {
  "Armed government transport": string;
  "capital ship": string;
  corvette: string;
  "Deep Space Mobile Battlestation": string;
  "Diplomatic barge": string;
  "Droid control ship": string;
  "Escort ship": string;
  freighter: string;
  "landing craft": string;
  "Patrol craft": string;
  "Star Cruiser": string;
  "Star dreadnought": string;
  "Star Destroyer": string;
  Starfighter: string;
  Transport: string;
  yacht: string;
};
