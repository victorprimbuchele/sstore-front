import { useState } from "react";
import { DefaultNavbar } from "../../components/Navbar/Default/DefaultNavbar";
import { DefaultLayoutProps } from "./DefaultLayout.types";
import { SimpleToggleButton } from "../../components/Button/Toggle/Simple/SimpleToggleButton";
import { DefaultMenu } from "../../components/Menu/Default/DefaultMenu";
import { DefaultList } from "../../components/List/Default/DefaultList";
import { useDefaultLayoutController } from "./useDefaultLayoutController";

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
}: DefaultLayoutProps) => {
  const { isOpen, setIsOpen, content } = useDefaultLayoutController();

  return (
    <div
      className="h-screen  sm:h-full font-body w-screen sm:w-full"
      id="sc-container-default-layout"
      key="sc-container-default-layout"
    >
      <div className="fixed bg-white w-screen sm:w-full drop-shadow-md">
        <DefaultNavbar
          menu={
            <SimpleToggleButton
              onClick={() => setIsOpen(true)}
              buttonName="Menu"
            />
          }
        />
        <DefaultMenu
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          list={<DefaultList content={content} />}
        />
      </div>
      <div className='pt-12 sm:pt-14'>{children}</div>
    </div>
  );
};