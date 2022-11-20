import {
  defaultListModel,
  DefaultListProps,
} from "../../../Presentation/components/List/Default/DefaultList.types";
import { FiltersData } from "../../../Domain/Model/Product/Query";

export interface ProductQueryModel {
  queries: DefaultListProps;
  setQueriesData: (queriesData: typeof defaultListModel) => void;
  filters: typeof defaultListModel;
  setFiltersData: (filtersData: FiltersData) => void;
  searches: DefaultSelectModel[];
  setSearchesData: (searchesData: Array<string>) => void;
}


export type DefaultSelectModel = {
  option: string;
  value: string;
};
