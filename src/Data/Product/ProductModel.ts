export type Product = {
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

export interface ProductsProps {
  products: Product[];
  setProducts: (product: Product[]) => void;
  addProduct: (product: Product) => void;
}
