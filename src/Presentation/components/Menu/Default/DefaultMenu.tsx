import { Drawer, List } from "@mui/material";
import { SimpleToggleButton } from "../../Button/Toggle/Simple/SimpleToggleButton";
import { DefaultNavbar } from "../../Navbar/Default/DefaultNavbar";
import { DefaultMenuProps } from "./DefaultMenu.types";

export const DefaultMenu: React.FC<DefaultMenuProps> = ({
  isOpen,
  onClose,
  list,
}) => {
  return (
    <>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={onClose}
        className="font-body sm:!w-full "
        id="default-drawer-container"
      >
        <div className='w-screen sm:w-60 md:w-72 lg:w-96 xl:w-100'>
          <DefaultNavbar
            menu={<SimpleToggleButton onClick={onClose} buttonName="Fechar" />}
          />
        </div>
        {list}
      </Drawer>
    </>
  );
};
