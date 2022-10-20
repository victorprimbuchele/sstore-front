import { toast } from 'react-toastify';
import { ProductsProps } from "../../../Data/Product/ProductModel";
import { listProducts } from "../../../Services/UseCases/Product/List";
import { LoadingProps } from "../Generic/Loading";
import { PaginationProps } from "../Generic/Pagination";

export class ProductList implements PaginationProps, LoadingProps {

    currentPage: number = 0;
    isLoading: boolean = false;

    constructor() {
        this.currentPage;
        this.setCurrentPage;
        this.isLoading;
        this.setIsLoading;
    }

    setCurrentPage(currentPage: number) {
        this.currentPage = currentPage;
    }

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    async setProductData(products: ProductsProps) {
        try {
            this.setIsLoading(true);

            const productsList = await listProducts();

            products.setProducts(productsList.products);

            return Promise.resolve(productsList)
        } catch (error) {
            console.error(error);

            toast.error('Houve um erro ao buscar os produtos');

            return Promise.reject(error);
        }
    }
}