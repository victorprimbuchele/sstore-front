import { Button, ButtonBase } from "@mui/material";
import { SimpleToggleButtonProps } from "./SimpleToggleButton.types";

export const SimpleToggleButton: React.FC<SimpleToggleButtonProps> = ({
  onClick,
  buttonName,
  className,
  icon,
}) => {
  return (
    <ButtonBase
      onClick={onClick}
      className={`text-xs sm:text-sm lg:text-base ${className}`}
    >
      {buttonName}
      {icon}
    </ButtonBase>
  );
};
