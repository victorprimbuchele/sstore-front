import { TextField } from "@mui/material";

interface UserInputProps {
  icon?: React.ReactNode;
  label: string;
  hasError: boolean;
  errorMessage?: any;
  type: string;
  id: string;
  maxLength: number;
}

export const UserInput: React.FC<UserInputProps> = ({
  icon,
  label,
  id,
  hasError,
  errorMessage,
  type,
  maxLength,
  ...rest
}: UserInputProps) => {
  return (
    <div id={`sc-${id}-login-container`} className="mb-8 xl:mb-10 w-full flex">
      {icon ? (
        <div className="w-1/12 flex justify-center items-end">{icon}</div>
      ) : null}
      <TextField
        type={type}
        helperText={errorMessage}
        error={hasError}
        {...rest}
        id={`sc-${id}-input`}
        label={label}
        variant="standard"
        className={`!ml-1 ${icon ? "w-11/12 sm:10/12 lg:9/12" : "w-full"} `}
        inputProps={{ maxLength: maxLength }}
      />
    </div>
  );
};
