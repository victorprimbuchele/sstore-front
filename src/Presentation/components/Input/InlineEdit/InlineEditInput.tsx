import { BorderColor, Check } from "@mui/icons-material";
import { Input } from "@mui/material";
import { useState } from "react";

export interface InlineEditInputProps {
  data: string;
  errorMessage?: any;
  hasError: boolean;
  maxLength: number;
  className: string;
}



export const InlineEditInput: React.FC<InlineEditInputProps> = ({
  data,
  errorMessage,
  hasError,
  maxLength,
  className,
  ...rest
}: InlineEditInputProps) => {
  const [editState, setEditState] = useState("done");

  return (
    <div className={className}>
      {editState !== "editing" ? (
        <p className="text-ellipsis overflow-hidden whitespace-nowrap">
          {data}
        </p>
      ) : (
        <Input
          className="!font-inherit !text-inherit"
          disabled={editState !== "editing"}
          id="sc-inline-edit-input"
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
            maxLength: maxLength,
          }}
          value={data}
          {...rest}
          error={hasError}
        />
      )}
      <button
        className="!font-inherit !text-inherit"
        onClick={() => {
          setEditState((prevState) => {
            if (prevState === "editing") {
              return "done";
            } else {
              return "editing";
            }
          });
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
