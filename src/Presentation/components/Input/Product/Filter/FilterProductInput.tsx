import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";

export const FilterProductInput: React.FC = () => {
  return (
      <div
        id="sc-search-container"
        className="bg-gray-100 p-1 px-2.5 rounded-md w-10/12 mr-5 max-h-9"
      >
        <Search sx={{ fontSize: 15 }} className="w-2/12" />
        <InputBase
          className="bg-gray-100 ml-2 !text-xs !font-body w-10/12"
          autoFocus
          placeholder="Pesquisar filtros e marcas"
        />
      
    </div>
  );
};
