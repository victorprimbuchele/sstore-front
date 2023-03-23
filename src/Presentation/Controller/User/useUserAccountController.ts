import { useEffect, useState } from "react";
import { UserModel } from "../../../Data/User/UserModel";

export type UserAccountNeumorphicListState = {
  personalData: boolean;
  address: boolean;
  order: boolean;
};

export interface UserAccountControllerParams {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserModel;
  getUserData: () => Promise<void>;
}

export const useUserAccountController = ({
  isLoading,
  setIsLoading,
  userData,
  getUserData,
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

    if (userData.email === "") {
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
