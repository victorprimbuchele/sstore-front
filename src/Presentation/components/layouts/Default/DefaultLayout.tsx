import { DefaultNavbar } from "../../Navbar/Default/DefaultNavbar";
import { DefaultLayoutProps } from "./DefaultLayout.types";
import { SimpleToggleButton } from "../../Button/Toggle/Simple/SimpleToggleButton";
import { DefaultMenu } from "../../Menu/Default/DefaultMenu";
import { DefaultList } from "../../List/Default/DefaultList";
import { useDefaultLayoutController } from "./useDefaultLayoutController";

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
}: DefaultLayoutProps) => {
  const { isOpen, setIsOpen, content } = useDefaultLayoutController();

  return (
    <div
      className="h-screen sm:h-full font-body w-full sm:w-full"
      id="sc-container-default-layout"
      key="sc-container-default-layout"
    >
      <div className="fixed bg-white w-screen sm:w-full shadow-md z-50" id='container-nav-def-lay'>
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
      <div className='pt-12'>{children}</div>
    </div>
  );
};
