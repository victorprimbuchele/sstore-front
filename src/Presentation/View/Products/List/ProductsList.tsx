import { observer } from 'mobx-react-lite';
import { Pagination, Skeleton } from "@mui/material";
import { ProductCard } from "../../../components/Card/Product/ProductCard";
import { useStarshipListController } from "../../../Controller/Starship/useStarshipListController";

export const ProductsList = observer(() => {
  const {
    products,
    isLoading,
    handleSeeMore,
  } = useStarshipListController();

  return (
    <div className="h-screen w-full">
      {!isLoading && products ? (
        <div id="sc-container">
          <ProductCard products={products} />

          <button type="button" id="sc-btn-see-more" onClick={handleSeeMore}>
            Ver mais
          </button>
       
        </div>
      ) : (
        <Skeleton variant="rectangular" width={210} height={60} />
      )}
    </div>
  );
});
