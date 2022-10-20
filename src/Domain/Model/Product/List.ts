export interface ListResponseData {
    current_page: number;
    data: ProductResponseData[];
  }

  export interface ListResponse {
    products: ProductResponseData[];
    currentPage: number;
  }
  
  export type ProductResponseData = {
    id: number;
    created_at: Date;
    updated_at: Date;
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
  