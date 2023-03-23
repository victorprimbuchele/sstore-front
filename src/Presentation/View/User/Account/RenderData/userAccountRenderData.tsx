import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useUserController,
} from "../../../../Controller/User/useUserController";
import { Unauthenticated } from "../../../Unauthenticated/Unauthenticated";
import { UserAccountFormProps } from "../Form/UserAccountForm";
import { UserAccountLoading } from "../Loading/UserAccountLoading";
import DeleteAccountModal from "../Modal/Delete/UserAccountDeleteModal";
import { UserAccountUpdateModal } from "../Modal/Update/UserAccountUpdateModal";

type RenderDataType = {
  [key: string]: any;
};

export type UserAccountRenderDataParams = {
  UserAccountForm: React.FC<UserAccountFormProps>;
  UserAccountUpdateModal: React.FC<UserAccountUpdateModal>;
  userName: string;
};

type UserAccountRenderDataType = (
  param: UserAccountRenderDataParams
) => RenderDataType;

export const userAccountRenderData: UserAccountRenderDataType = ({
  UserAccountForm,
  UserAccountUpdateModal,
  userName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { deleteAccount } = useUserController(navigate);

  return {
    user: (
      <div className="flex flex-col font-body w-full text-sm h-full mt-6">
        <p>Olá, {userName}.</p>
        <h1 className="mx-auto pt-11 pb-9 text-lg font-medium">Minha conta</h1>
        <div className="flex flex-col justify-between h-full px-2">
          <>{UserAccountForm()}</>
          <button
            className="text-gray-500 h-max w-max self-center border-2 rounded-3xl px-18 py-4 mb-7 hover:bg-red-700 hover:border-red-700 hover:text-white duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            excluir conta
          </button>
          <DeleteAccountModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={deleteAccount}
          />
        </div>
      </div>
    ),
    modal: { UserAccountUpdateModal },
    forbidden: <Unauthenticated />,
    loading: <UserAccountLoading />,
  };
};
