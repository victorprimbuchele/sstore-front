import { SimpleToggleButton } from "../../../../../../Button/Toggle/Simple/SimpleToggleButton";
import { FilterProductInput } from "../../../../../../Input/Product/Filter/FilterProductInput";

export const SearchFilterProductList: React.FC = () => {
  return (
    <div className="pl-6 pr-4 w-full flex h-14 items-center rounded-t-xl shadow-lg">
      <FilterProductInput />
      <SimpleToggleButton
        id="sc-btn-to-close-filter-backdrop !justify-start"
        className="hidden w-2/12 max-h-9"
        onClick={() =>
          document.getElementById("sc-btn-to-close-filter-backdrop")?.click()
        }
        buttonName="Fechar"
      />
    </div>
  );
};
