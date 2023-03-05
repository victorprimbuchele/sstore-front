import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { UserAccountFormUpdate } from "./Form/Update/UserAccountFormUpdate";
import { UserContainer } from "../../../components/layouts/Container/User/UserContainer";
import { useUserController } from "../../../Controller/User/useUserController";
import { NeumorphicList } from "../../../components/List/Neumorphic/NeumorphicList";
import { observer } from "mobx-react";
import { NeumorphicListMenu } from "../../../components/List/Neumorphic/Menu/NeumorphicListMenu";
import { NeumorphicListMenuContent } from "../../../components/List/Neumorphic/Menu/Content/NeumorphicListMenuContent";
import { DefaultNavbar } from "../../../components/Navbar/Default/DefaultNavbar";
import { PersonalDataForm } from "./Form/PersonalData/PersonalDataForm";

type UserAccountNeumorphicListState = {
  personalData: boolean;
  address: boolean;
  order: boolean;
};

export type ItemTypesHandleOpenNeumorphicList =
  | "personalData"
  | "address"
  | "order";

export const UserAccount: React.FC = observer(() => {
  const { userData, getUserData, handleUpdateForm, isLoading } =
    useUserController();

  const [open, setOpen] = useState<UserAccountNeumorphicListState>({
    personalData: false,
    address: false,
    order: false,
  });

  const handleClick = (item: ItemTypesHandleOpenNeumorphicList) => {
    setOpen((prevState) => {
      return { ...prevState, [item]: !prevState[item] };
    });
  };

  const [isOpenModal, setIsOpenModal] = useState(
    userData.name === "" && !isLoading
  );

  useEffect(() => {
    async () => await getUserData();
  }, []);

  return (
    <UserContainer>
      <div className="absolute top-0 left-0 w-full">
        <DefaultNavbar />
      </div>
      {userData.name ? (
        <div className="flex flex-col font-body w-full text-sm h-full mt-6">
          <p>Olá, {userData.name}.</p>
          <h1 className="mx-auto pt-11 pb-9 text-lg font-medium">
            Minha conta
          </h1>
          <div className="flex flex-col justify-between h-full px-2">
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
              >
                <NeumorphicListMenuContent>
                  <PersonalDataForm
                    handleUpdateForm={handleUpdateForm}
                    user={userData}
                  />
                </NeumorphicListMenuContent>
              </NeumorphicListMenu>
              <NeumorphicListMenu
                handleClick={() => handleClick("order")}
                open={open.order}
                label="Cartões"
              >
                <NeumorphicListMenuContent></NeumorphicListMenuContent>
              </NeumorphicListMenu>
              <NeumorphicListMenu
                handleClick={() => handleClick("address")}
                open={open.address}
                label="Endereços"
              >
                <NeumorphicListMenuContent></NeumorphicListMenuContent>
              </NeumorphicListMenu>
              <NeumorphicListMenu
                handleClick={() => handleClick("order")}
                open={open.order}
                label="Pedidos"
                isLastMenu={true}
              >
                <NeumorphicListMenuContent></NeumorphicListMenuContent>
              </NeumorphicListMenu>
            </NeumorphicList>
            <button className="text-gray-500 h-max w-max self-center border-2 rounded-3xl px-18 py-4 mb-7 hover:bg-red-700 hover:border-red-700 hover:text-white duration-300">
              excluir conta
            </button>
          </div>
        </div>
      ) : (
        <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <div className="bg-white !font-body max-w-sm p-4 mx-auto translate-y-1/3 rounded-md">
            <h1 className="text-center my-5 font-semibold">
              Finalize seu cadastro
            </h1>
            <UserAccountFormUpdate handleUpdateForm={handleUpdateForm} />
          </div>
        </Modal>
      )}
    </UserContainer>
  );
});
