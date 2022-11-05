

export type ProductModel = {
    name: string;
    price: number | string;
    qty: number | null;
    media?: string | null;
    rating?: RatingModel;
    brand: string;
    model: string;
    color?: string | null | string[];
    description?: DescriptionModel;
    
}

export type RatingModel = {
    total: number;
    votes: {
        fiveStar: number | string;
        fourStar: number | string;
        threeStar: number | string;
        twoStar: number | string;
        oneStar: number | string;

    }
}

export type DescriptionModel = {
    cardDescription: string;
    fullDescription: string | React.ReactNode;
    minimunDescription: string;
}

export interface ProductProps {
    products: ProductModel[];
    setProducts: (product: ProductModel[]) => void;
    addProduct: (product: ProductModel) => void;
  }
  