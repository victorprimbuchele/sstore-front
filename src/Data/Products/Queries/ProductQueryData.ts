import { makeAutoObservable } from "mobx";
import { FiltersData } from "../../../Domain/Model/Product/Query";
import {
  defaultListModel,
  DefaultListProps,
} from "../../../Presentation/components/List/Default/DefaultList.types";
import { translatorToPt } from "../../../utils/translatorToPt";
import { DefaultSelectModel, ProductQueryModel } from "./ProductQueryModel";
import { queryDictionary } from "./queryDictionary";

class ProductQuery implements ProductQueryModel {
  queries: DefaultListProps = { content: [] };
  filters: typeof defaultListModel = [];
  searches: DefaultSelectModel[] = [];

  constructor() {
    makeAutoObservable(this);
    this.queries;
    this.setQueriesData;
    this.filters;
    this.setFiltersData;
    this.searches;
    this.setSearchesData;
  }

  setQueriesData(queriesData: typeof defaultListModel) {
    this.queries = {
      content: queriesData,
    };
  }

  setFiltersData(filtersData: FiltersData) {
    this.filters.push({
      title: "Filtrar por",
      route: null,
      nested: [
        {
          title: "Marcas",
          route: null,
          nested: filtersData.manufacturer.map(({ manufacturer }) => {
            return {
              title: manufacturer,
              route: `/produtos?marca=${manufacturer}`,
              nested: null,
            };
          }),
        },
        {
          title: "Categorias",
          route: null,
          nested: Object.keys(filtersData.starship_class).map(
            (starshipClassKey) => {
              return {
                title:
                  filtersData.starship_class[
                    starshipClassKey as keyof typeof filtersData.starship_class
                  ],
                route: `/produtos?categoria=${starshipClassKey}`,
                nested: null,
              };
            }
          ),
        },
      ],
    });
  }

  setSearchesData(searchesData: Array<string>) {
    searchesData.forEach((searchData) => {
      this.searches.push({
        option: searchData,
        value: translatorToPt(queryDictionary, searchData),
      });
    });
  }

  resetQueries() {
    this.queries = { content: [] };
    this.filters = [];
    this.searches = [];
  }
}

export default new ProductQuery();
