import { makeAutoObservable } from "mobx";
import product from "../../../Data/Products/ProductData";
import { ProductModel } from "../../../Data/Products/ProductModel";
import { LoadingProps } from "../Generic/Loading";

class Product implements LoadingProps {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.setProductData;
    this.isLoading;
    this.setIsLoading;
  }

  get products() {
    return product.products;
  }

  set setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setProductData(products: Array<ProductModel>) {
    product.setProducts(products);
  }

  addProduct(productObj: ProductModel) {
    product.addProduct(productObj);
  }

  resetProductData() {
    product.resetProducts();
  }
}

export default new Product();
