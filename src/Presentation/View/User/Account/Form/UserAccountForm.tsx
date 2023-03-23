import { UserAccountNeumorphicListState } from "../../../../Controller/User/useUserAccountController";
import { PersonalDataFormProps } from "./PersonalData/PersonalDataForm";
import { ItemTypesHandleOpenNeumorphicList } from "../UserAccount";
import { NeumorphicListMenuContent } from "../../../../components/List/Neumorphic/Menu/Content/NeumorphicListMenuContent";
import { NeumorphicListMenu } from "../../../../components/List/Neumorphic/Menu/NeumorphicListMenu";
import { NeumorphicList } from "../../../../components/List/Neumorphic/NeumorphicList";

export interface UserAccountFormProps {
  handleClick: (item: ItemTypesHandleOpenNeumorphicList) => void;
  open: UserAccountNeumorphicListState;
  PersonalDataForm: React.FC<PersonalDataFormProps>;
}

export const UserAccountForm: React.FC<UserAccountFormProps> = ({
  handleClick,
  open,
  PersonalDataForm,
}) => {
  return (
    <NeumorphicList
      blur={20}
      color="#ffffff"
      radius={20}
      size="w-full h-auto md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 mx-auto"
      type="convex"
      lightingAngle="top-left"
    >
      <NeumorphicListMenu
        handleClick={() => handleClick("personalData")}
        open={open.personalData}
        label="Dados pessoais"
        id={1}
      >
        <NeumorphicListMenuContent id={1}>
          {/* @ts-expect-error */}
          <>{PersonalDataForm()}</>
        </NeumorphicListMenuContent>
      </NeumorphicListMenu>
      <NeumorphicListMenu
        handleClick={() => handleClick("order")}
        open={open.order}
        label="Cartões"
        id={2}
      >
        <NeumorphicListMenuContent id={2}></NeumorphicListMenuContent>
      </NeumorphicListMenu>
      <NeumorphicListMenu
        handleClick={() => handleClick("address")}
        open={open.address}
        label="Endereços"
        id={3}
      >
        <NeumorphicListMenuContent id={3}></NeumorphicListMenuContent>
      </NeumorphicListMenu>
      <NeumorphicListMenu
        handleClick={() => handleClick("order")}
        open={open.order}
        label="Pedidos"
        isLastMenu={true}
        id={4}
      >
        <NeumorphicListMenuContent id={4}></NeumorphicListMenuContent>
      </NeumorphicListMenu>
    </NeumorphicList>
  );
};
