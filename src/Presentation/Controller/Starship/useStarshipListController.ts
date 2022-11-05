import { useEffect, useState } from "react";
import { Starship } from "../../../Data/Starship/StarshipModel";
import starshipViewModel from "../../../Domain/UseCase/Starship/Starship";
import productViewModel from "../../../Domain/UseCase/Product/Product";
import { ProductModel } from "../../../Data/Products/ProductModel";

export const useStarshipListController = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!starshipViewModel.isLoading) {
      handlefetchStarships();
    }
  }, [starshipViewModel.currentPage]);

  useEffect(() => {
    dataBindStarshipToProduct(
      starshipViewModel.starships!,
      productViewModel.addProduct
    );
  }, [starshipViewModel.starships]);

  function dataBindStarshipToProduct(
    starships: Starship[],
    setter: (productObj: ProductModel) => void
  ) {
    setIsLoading(true);

    if (starships) {
      for (let i = 0; i < starships.length; i++) {
        const binded = {
          brand: starships[i].manufacturer,
          model: starships[i].model,
          name: starships[i].name,
          price: starships[i].cost_in_credits,
          qty: null,
          description: {
            cardDescription: `
            A nave ${starships[i].model} possui:
            
            - Velocidade máxima: ${starships[i].mglt} megalight${
              Number(starships[i]?.mglt) > 1 ? "s" : ""
            } por hora

            - Capacidade de até: ${starships[i].passengers} passageiros
            
            - Capacidade de carga: ${starships[i].cargo_capacity} toneladas
            `,
            fullDescription: `
            A nave ${starships[i].model} possui:
            - Velocidade máxima: ${starships[i].mglt} megalight${
              Number(starships[i]?.mglt) > 1 ? "s" : ""
            } por hora
            - Capacidade de até: ${starships[i].passengers} passageiros
            - Capacidade de carga: ${starships[i].cargo_capacity} toneladas
            `,
            minimunDescription: `
            A nave ${starships[i].model} possui:
            - Velocidade máxima: ${starships[i].mglt} megalight${
              Number(starships[i]?.mglt) > 1 ? "s" : ""
            } por hora
            - Capacidade de até: ${starships[i].passengers} passageiros
            - Capacidade de carga: ${starships[i].cargo_capacity} toneladas
            `,
          },
        };

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
    isLoading,
    dataBindStarshipToProduct,
    dataLengthThisPage: starshipViewModel.dataLengthThisPage,
    page: starshipViewModel.currentPage,
    lastPage: starshipViewModel.lastPage,
    handleSeeMore,
  };
};
