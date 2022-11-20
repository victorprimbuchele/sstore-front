import { KeyboardArrowDown } from "@mui/icons-material";
import { observer } from "mobx-react";
import { useFilterAndSearchController } from "../../../Controller/Product/useFilterAndSearchController";
import { SimpleToggleButton } from "../../Button/Toggle/Simple/SimpleToggleButton";
import { DefaultToolbar } from "../Default/DefaultToolbar";

export const ProductToolbar: React.FC = observer(() => {
  const { handleClick } = useFilterAndSearchController();

  return (
    <DefaultToolbar>
      <div className="h-12 w-full flex justify-end mt-2">
        <SimpleToggleButton
          onClick={handleClick}
          buttonName="Filtros"
          icon={<KeyboardArrowDown />}
        />
      </div>
    </DefaultToolbar>
  );
});
