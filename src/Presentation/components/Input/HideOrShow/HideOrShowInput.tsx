import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { EditStateType } from "../../../View/User/Account/Form/PersonalData/PersonalDataForm";

interface HideOrShowInputProps {
  isEditing: EditStateType;
  children: React.ReactNode;
  value: string;
  label: string;
}

export const HideOrShowInput: React.FC<HideOrShowInputProps> = ({
  children,
  isEditing,
  value,
  label,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <label className="!text-xs">{label}</label>
      <div>
        <button
          id="sc-btn-show-value"
          type="button"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
        </button>
        {isEditing === "editing" ? (
          <span>{isHidden ? "*".repeat(value?.length) : value}</span>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};
