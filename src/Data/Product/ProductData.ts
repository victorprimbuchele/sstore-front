import { addAnObjectToArray } from "../../utils/addAnObjectToArray";
import { Product, ProductsProps } from "./ProductModel";

class Products implements ProductsProps {
  products = new Array<Product>();

  constructor() {
    this.products;
    this.addProduct;
    this.setProducts;
  }

  addProduct(products: Product) {
    addAnObjectToArray(this.products, products);
  }

  setProducts(product: Array<Product>) {
    this.products = product;
  }
}

export default new Products();
