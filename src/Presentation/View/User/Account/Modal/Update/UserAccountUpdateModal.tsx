import { Modal } from "@mui/material";
import { UserAccountFormUpdateProps } from "../../Form/Update/UserAccountFormUpdate";

export interface UserAccountUpdateModal {
  rendering: string;
  setRendering: React.Dispatch<React.SetStateAction<string>>;
  UserAccountFormUpdate: React.FC<UserAccountFormUpdateProps>;
}

export const UserAccountUpdateModal: React.FC<UserAccountUpdateModal> = ({
  rendering,
  setRendering,
  UserAccountFormUpdate,
}: UserAccountUpdateModal) => (
  <Modal open={rendering === "modal"} onClose={() => setRendering("user")}>
    <div className="bg-white !font-body max-w-sm p-4 mx-auto translate-y-1/3 rounded-md">
      <h1 className="text-center my-5 font-semibold">Finalize seu cadastro</h1>
      <>{UserAccountFormUpdate}</>
    </div>
  </Modal>
);
