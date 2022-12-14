import { useEffect, useLayoutEffect, useState } from "react";
import { Starship } from "../../../Data/Starship/StarshipModel";
import starshipViewModel from "../../../Domain/UseCase/Starship/Starship";
import productViewModel from "../../../Domain/UseCase/Product/Product";
import { ProductModel } from "../../../Data/Products/ProductModel";
import { starshipBinder } from "./dataBinding";
import { useLocation } from "react-router-dom";
import { getQueryKeysAndValues } from "../../../utils/getQueryKeysAndValues";

export const useStarshipListController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const queryKeysAndValues = getQueryKeysAndValues(location.search);

    for (let i = 0; i < queryKeysAndValues.length; i++) {
      starshipViewModel.setQueryKey = queryKeysAndValues[i].key;
      starshipViewModel.setQueryValue = queryKeysAndValues[i].value;
    }
  }, [location]);

  useLayoutEffect(() => {
    starshipViewModel.reset();
    productViewModel.resetProductData();
  }, []);

  useEffect(() => {
    handlefetchStarships().then(() => {
      productViewModel.resetProductData();

      dataBindStarshipToProduct(
        starshipViewModel.starships!,
        productViewModel.addProduct
      );
    });
  }, [location]);

  useEffect(() => {
    if (
      !starshipViewModel.isLoading &&
      (starshipViewModel.currentPage !== 1 ||
        productViewModel.products.length === 0)
    ) {
      handlefetchStarships();
    }
  }, [starshipViewModel.currentPage]);

  useEffect(() => {
    if (
      starshipViewModel.currentPage !== 1 ||
      productViewModel.products.length === 0
    ) {
      dataBindStarshipToProduct(
        starshipViewModel.starships!,
        productViewModel.addProduct
      );
    }
  }, [starshipViewModel.starships]);

  function dataBindStarshipToProduct(
    starships: Starship[],
    setter: (productObj: ProductModel) => void
  ) {
    setIsLoading(true);

    if (starships) {
      for (let i = 0; i < starships.length; i++) {
        const binded = starshipBinder(starships[i]);

        setter({ ...binded });
      }
    }

    setIsLoading(false);
  }

  const handleSeeMore = () => {
    if (starshipViewModel.currentPage < starshipViewModel.lastPage) {
      starshipViewModel.setCurrentPage(starshipViewModel.currentPage + 1);
    }
  };

  const handlefetchStarships = async () => {
    await starshipViewModel.fetchStarships();
  };

  return {
    products: productViewModel.products,
    starships: starshipViewModel.starships,
    isLoading: isLoading,
    isFetching: starshipViewModel.isLoading || isLoading,
    dataBindStarshipToProduct,
    dataLengthThisPage: starshipViewModel.dataLengthThisPage,
    page: starshipViewModel.currentPage,
    lastPage: starshipViewModel.lastPage,
    handleSeeMore,
  };
};
