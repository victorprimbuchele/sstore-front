import InputMask from "react-input-mask";
import { Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InlineEditInput } from "../../../../../components/Input/InlineEdit/InlineEditInput";
import { UserModel } from "../../../../../../Data/User/UserModel";
import { useState } from "react";
import { ChangePasswordProps } from "./ChangePassword/PersonalDataChangePasswordForm";

export interface UpdatePersonalDataRequestData {
  name: string;
  phone: string;
  cpfCnpj: string;
}

export interface PersonalDataFormProps {
  handleUpdateForm: (data: UpdatePersonalDataRequestData) => Promise<void>;
  user: UserModel;
  ChangePasswordForm: React.FC<ChangePasswordProps>;
}

export type EditStateType = "editing" | "done";

export interface EditStateProps {
  name: EditStateType;
  phone: EditStateType;
  cpfCnpj: EditStateType;
}

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  handleUpdateForm,
  user,
  ChangePasswordForm,
}: PersonalDataFormProps) => {
  const [editState, setEditState] = useState<EditStateProps>({
    name: "done",
    phone: "done",
    cpfCnpj: "done",
  });
  
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Este campo é obrigatório.")
      .min(5, "Deve ser um nome válido"),
    phone: Yup.string()
      .min(14, "Deve ter ao menos 14 caracteres"),
    cpfCnpj: Yup.string().min(14, "Deve ter ao menos 14 caracteres"),
  });

  const inlineEditInputClassName = "flex justify-between w-full !font-body";

  const formOptions = {
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: user.name,
      phone: user.phone,
      cpfCnpj: user.cpf_cnpj,
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const handleEditingState = (value: "editing" | "done", key: string) =>
    setEditState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });

  return (
    <div className="flex flex-col w-full max-h-44 overflow-auto px-2" id="sc-personal-data-form-container">
      <form
        onSubmit={handleSubmit((data: any) => handleUpdateForm(data))}
        className="flex flex-col justify-center items-center m-auto w-full gap-y-2"
      >
        <div className="w-full mt-6">
          <Controller
            key="sc-controller-user-name"
            name="name"
            control={control}
            render={({ field }) => (
              <InlineEditInput
                placeholder="Insira seu nome aqui"
                key="sc-personal-data-name"
                className={inlineEditInputClassName}
                editState={editState.name}
                setEditState={(value: "editing" | "done") =>
                  handleEditingState(value, "name")
                }
                value={field.value}
              >
                <Input
                  className="!font-inherit !text-inherit w-full sm:w-11/12"
                  id="inline-edit-input-name"
                  aria-describedby="inline-edit-input-name"
                  inputProps={{
                    "aria-label": "inline-edit-input",
                    maxLength: 65,
                  }}
                  placeholder="Seu nome completo"
                  {...field}
                  error={errors.name ? true : false}
                />
              </InlineEditInput>
            )}
          />
        </div>
        <Controller
          key="sc-controller-user-phone"
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InlineEditInput
              key="sc-personal-data-phone"
              placeholder="Insira seu número de telefone"
              className={inlineEditInputClassName}
              value={value}
              editState={editState.phone}
              setEditState={(value: "editing" | "done") =>
                handleEditingState(value, "phone")
              }
            >
              <InputMask
                mask="(99) 99999-9999"
                alwaysShowMask
                value={value}
                onChange={onChange}
                name="phone"
                disabled={editState["phone"] === "done"}
              >
                {/* @ts-expect-error */}
                {(props) => (
                  <Input
                    className="!font-inherit !text-inherit w-full sm:w-11/12"
                    id="inline-edit-input-phone"
                    aria-describedby="inline-edit-input-phone"
                    {...props}
                    error={errors.phone ? true : false}
                  />
                )}
              </InputMask>
            </InlineEditInput>
          )}
        />
        <Controller
          key="sc-controller-user-cpf-cnpj"
          name="cpfCnpj"
          control={control}
          render={({ field }) => (
            <InlineEditInput
              key="sc-personal-data-cpf-cnpj"
              placeholder="Insira seu número do documento de pessoa física"
              className={inlineEditInputClassName}
              value={field.value}
              editState={editState.cpfCnpj}
              setEditState={(value: "editing" | "done") =>
                handleEditingState(value, "cpfCnpj")
              }
            >
              <InputMask
                mask={
                  field.value?.replace(/\D/g, "").length < 15
                    ? "999.999.999-99"
                    : "99.999.999/9999-99"
                }
                alwaysShowMask
                onChange={field.onChange}
                value={field.value}
                name={field.name}
              >
                {/* @ts-expect-error */}
                {(inputProps): any => (
                  <Input
                    className="!font-inherit !text-inherit w-full sm:w-11/12"
                    type="cpfCnpj"
                    helperText={errors.cpfCnpj?.message}
                    error={errors.cpfCnpj ? true : false}
                    id="sc-cpf-cnpj-hidden-inline-input"
                    {...inputProps}
                  />
                )}
              </InputMask>
            </InlineEditInput>
          )}
        />
      </form>
      {/* @ts-expect-error */}
      {ChangePasswordForm()}
    </div>
  );
};
