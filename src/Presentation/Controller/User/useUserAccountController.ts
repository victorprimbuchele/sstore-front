import { useEffect, useState } from "react";
import { UserModel } from "../../../Data/User/UserModel";

export type UserAccountNeumorphicListState = {
  personalData: boolean;
  address: boolean;
  order: boolean;
};

export interface UserAccountControllerParams {
  isLoading: boolean;
  userData: UserModel;
}

export const useUserAccountController = ({
  isLoading,
  userData,
}: UserAccountControllerParams) => {
  const [open, setOpen] = useState<UserAccountNeumorphicListState>({
    personalData: false,
    address: false,
    order: false,
  });

  const [rendering, setRendering] = useState("loading");

  const checkPropToKnowWhatRender = () => {
    if (isLoading) {
      return "loading";
    }

    if (
      userData.email === "" ||
      localStorage.getItem("c838d0fb656e604ef7e12074b7caa1e3") == null
    ) {
      return "forbidden";
    }

    if (userData.name === "") {
      return "modal";
    }

    return "user";
  };

  useEffect(
    () => setRendering(checkPropToKnowWhatRender()),
    [userData.email, userData.name, isLoading]
  );

  return {
    open,
    setOpen,
    rendering,
    setRendering,
  };
};
