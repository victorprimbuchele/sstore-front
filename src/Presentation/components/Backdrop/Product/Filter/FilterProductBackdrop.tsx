import { Backdrop } from "@mui/material";
import { observer } from "mobx-react";
import { useFilterAndSearchController } from "../../../../Controller/Product/useFilterAndSearchController";
import { SimpleToggleButton } from "../../../Button/Toggle/Simple/SimpleToggleButton";
import { FilterProductList } from "../../../List/Default/Product/Filter/FilterProductList";

export const FilterProductBackdrop: React.FC = observer(() => {
  const { handleOpen, handleClose, isOpen } = useFilterAndSearchController();

  return (
    <>
      <SimpleToggleButton
        id="sc-btn-to-open-filter-backdrop"
        className="!hidden"
        onClick={handleOpen}
        buttonName="Abrir lista de filtros"
      />
      <SimpleToggleButton
        id="sc-btn-to-close-filter-backdrop"
        className="!hidden"
        onClick={handleClose}
        buttonName="Fechar lista de filtros"
      />
      <Backdrop open={isOpen}>
        <FilterProductList />
      </Backdrop>
    </>
  );
});
