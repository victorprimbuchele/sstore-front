import { observer } from "mobx-react";
import { useFilterAndSearchController } from "../../../../../Controller/Product/useFilterAndSearchController";
import { DefaultList } from "../../DefaultList";
import { SearchFilterProductList } from "./sections/Search/SearchFilterProductList";

export const FilterProductList: React.FC = observer(() => {
  const { filterList, searchOptions } = useFilterAndSearchController();

  return (
    <div className="bg-white !font-body w-full h-1/2 rounded-t-xl fixed bottom-0">
      <SearchFilterProductList />
      <div className="h-5/6 overflow-auto">
        <DefaultList content={filterList.content} />
      </div>
    </div>
  );
});
