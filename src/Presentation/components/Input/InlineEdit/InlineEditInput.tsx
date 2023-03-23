import { BorderColor, Check } from "@mui/icons-material";
import { EditStateType } from "../../../View/User/Account/Form/PersonalData/PersonalDataForm";

export interface InlineEditInputProps {
  className: string;
  children: React.ReactNode;
  editState: EditStateType;
  hasLabel?: boolean;
  setEditState: (value: EditStateType) => void;
  value: string;
  placeholder?: string;
}

export const InlineEditInput: React.FC<InlineEditInputProps> = ({
  className,
  children,
  editState,
  setEditState,
  value,
  hasLabel = true,
  placeholder = 'Insira seus dados aqui'
}: InlineEditInputProps) => {
  return (
    <div className={className}>
      {editState !== "editing" && hasLabel ? (
        <p className="text-ellipsis overflow-hidden whitespace-nowrap">
          {value ? value : placeholder}
        </p>
      ) : (
        <>{children}</>
      )}
      <button
        className="!font-inherit !text-inherit"
        type={editState === "done" ? "submit" : "button"}
        onClick={() => {
          setEditState(editState === "done" ? "editing" : "done");
        }}
      >
        {editState === "editing" ? (
          <Check sx={{ fontSize: 20 }} />
        ) : (
          <BorderColor sx={{ fontSize: 16 }} />
        )}
      </button>
    </div>
  );
};


 