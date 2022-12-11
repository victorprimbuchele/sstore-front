import { observer } from "mobx-react-lite";
import { Skeleton } from "@mui/material";
import { ProductCard } from "../../../components/Card/Product/ProductCard";
import { useStarshipListController } from "../../../Controller/Starship/useStarshipListController";
import { DefaultLayout } from "../../../components/layouts/Default/DefaultLayout";
import { ProductToolbar } from "../../../components/Toolbar/Product/ProductToolbar";
import { FilterProductBackdrop } from "../../../components/Backdrop/Product/Filter/FilterProductBackdrop";

export const ProductsList = observer(() => {
  const {
    products,
    isLoading,
    isFetching,
    page,
    lastPage,
    handleSeeMore,
  } = useStarshipListController();

  return (
    <DefaultLayout>
      <ProductToolbar />
      <div className="h-full w-full">
        {!isLoading && products.length > 0 ? (
          <div id="sc-container" className="relative">
            <ProductCard products={products} />
            {(isFetching && page === lastPage) || page !== lastPage ? (
              <div className="absolute left-0 right-0 flex justify-center px-4">
                <button
                  className={`w-full sm:w-1/2 md:w-1/3 lg:1/4 xl:w-1/5 p-4 px-6 mb-4 rounded ${
                    isFetching
                      ? "bg-gray-200 text-gray-400 border-gray-200"
                      : "bg-white border-sky-900 text-sky-900 "
                  }  border-2 font-medium hover:border-sky-900 hover:text-white hover:bg-sky-900 duration-300 `}
                  type="button"
                  id="sc-btn-see-more"
                  onClick={handleSeeMore}
                  disabled={isFetching}
                >
                  Ver mais
                  {isFetching ? (
                    <div className="lds-dual-ring ml-2"></div>
                  ) : null}
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mt-6 px-4 sm:px-6 lg:px-10 xl:px-16 2lx:px-24 h-full">
            <Skeleton
              className="mb-2"
              variant="rectangular"
              width="100%"
              height={140}
            />
            <Skeleton
              className="my-3"
              variant="rectangular"
              width="100%"
              height={140}
            />
            <Skeleton
              className="my-3"
              variant="rectangular"
              width="100%"
              height={140}
            />
            <Skeleton
              className="my-3"
              variant="rectangular"
              width="100%"
              height={140}
            />
            <Skeleton
              className="mt-2"
              variant="rectangular"
              width="100%"
              height={140}
            />
          </div>
        )}
      </div>
      <FilterProductBackdrop />
    </DefaultLayout>
  );
});
