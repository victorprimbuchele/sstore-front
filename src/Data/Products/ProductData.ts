import { makeAutoObservable } from "mobx";
import { ProductModel, ProductProps } from "./ProductModel";

class Product implements ProductProps {
  products = new Array<ProductModel>;

  constructor() {
    makeAutoObservable(this);
    this.products;
    this.addProduct;
    this.setProducts;
  }

  addProduct(product: ProductModel) {
    this.products = [...this.products, product]
  }

  setProducts(products: Array<ProductModel>) {
    this.products = products;
  }
}

export default new Product();
