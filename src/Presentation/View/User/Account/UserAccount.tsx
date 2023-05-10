import { UserAccountFormUpdate } from "./Form/Update/UserAccountFormUpdate";
import { UserContainer } from "../../../components/layouts/Container/User/UserContainer";
import { useUserController } from "../../../Controller/User/useUserController";
import { observer } from "mobx-react";
import { DefaultNavbar } from "../../../components/Navbar/Default/DefaultNavbar";
import { UserAccountForm } from "./Form/UserAccountForm";
import { useUserAccountController } from "../../../Controller/User/useUserAccountController";
import {
  userAccountRenderData,
  UserAccountRenderDataParams,
} from "./RenderData/userAccountRenderData";
import { UserAccountUpdateModal } from "./Modal/Update/UserAccountUpdateModal";
import { ButtonLogoff } from "../Button/Logoff/ButtonLogoff";
import { PersonalDataForm } from "./Form/PersonalData/PersonalDataForm";
import { PersonalDataChangePasswordForm } from "./Form/PersonalData/ChangePassword/PersonalDataChangePasswordForm";
import { useNavigate } from "react-router-dom";

export type ItemTypesHandleOpenNeumorphicList =
  | "personalData"
  | "address"
  | "order";

export const UserAccount: React.FC = observer(() => {
  const navigate = useNavigate();

  const { userData, handleUpdateForm, isLoading, changeUserPassword } =
    useUserController(navigate);

  const { rendering, setRendering, open, setOpen } = useUserAccountController({
    isLoading,
    userData,
  });

  const handleClick = (item: ItemTypesHandleOpenNeumorphicList) => {
    setOpen((prevState) => {
      return { ...prevState, [item]: !prevState[item] };
    });
  };

  const userAccountRenderDataParams: UserAccountRenderDataParams = {
    UserAccountForm: () => (
      <UserAccountForm
        handleClick={handleClick}
        open={open}
        PersonalDataForm={() => (
          <PersonalDataForm
            handleUpdateForm={handleUpdateForm}
            user={userData}
            ChangePasswordForm={() => <PersonalDataChangePasswordForm handleUpdateForm={changeUserPassword}/>}
          />
        )}
      />
    ),
    UserAccountUpdateModal: () => (
      <UserAccountUpdateModal
        UserAccountFormUpdate={() => (
          <UserAccountFormUpdate handleUpdateForm={handleUpdateForm} />
        )}
        rendering={rendering}
        setRendering={setRendering}
      />
    ),
    userName: userData.name,
  };

  return (
    <UserContainer className="bg-gray-50">
      <div className="absolute top-0 left-0 w-full">
        <DefaultNavbar
          menu={
            <ButtonLogoff
              style={
                userData.name === ""
                  ? "hidden"
                  : "font-body font-light text-sm sm:text-sm lg:text-base"
              }
            />
          }
        />
      </div>
      {userAccountRenderData(userAccountRenderDataParams)[rendering]}
    </UserContainer>
  );
});
