import { useEffect, useState } from "react";
import productsFilterViewModel from "../../../Domain/UseCase/Product/Query/Filter";

export const useFilterAndSearchController = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      productsFilterViewModel.setQueries();
    }
  }, [isOpen]);

  const handleClick = async () => {
    await productsFilterViewModel.setFiltersAndSearches();

    document.getElementById("sc-btn-to-open-filter-backdrop")?.click();
  };

  return {
    handleClick,
    filterList: productsFilterViewModel.queries,
    searchOptions: productsFilterViewModel.searches,
    handleClose,
    handleOpen,
    isOpen,
  };
};
