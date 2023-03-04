import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InlineEditInput } from "../../../../../components/Input/InlineEdit/InlineEditInput";
import { useState } from "react";
import { UserModel } from "../../../../../../Data/User/UserModel";

export interface UpdatePersonalDataRequestData {
  name: string;
  email: string;
  phone: string;
}

export interface PersonalDataFormProps {
  handleUpdateForm: (data: UpdatePersonalDataRequestData) => Promise<void>;
  user: UserModel;
}

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  handleUpdateForm,
  user,
}: PersonalDataFormProps) => {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Este campo é obrigatório.")
      .min(5, "Deve ser um nome válido"),
    email: Yup.string()
      .required("Este campo é obrigatório.")
      .email("Deve ser um e-mail válido."),
    phone: Yup.string()
      .required("Este campo é obrigatório.")
      .min(14, "Deve ter ao menos 14 caracteres"),
  });

  const inlineEditInputClassName = "flex justify-between w-full !font-body";

  const formOptions = {
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      onSubmit={handleSubmit((data) => handleUpdateForm(data))}
      className="flex flex-col justify-center items-center m-auto w-full gap-y-1.5"
    >
      <div className="w-full mt-6">
        <Controller
          key="sc-controller-user-name"
          name="name"
          control={control}
          render={({ field }) => (
            <InlineEditInput
              key="sc-personal-data-name"
              data={user.name}
              hasError={errors.name ? true : false}
              maxLength={65}
              errorMessage={errors.name?.message}
              className={inlineEditInputClassName}
              {...field}
            />
          )}
        />
      </div>
      <Controller
        key="sc-controller-user-email"
        name="email"
        control={control}
        render={({ field }) => (
          <InlineEditInput
            key="sc-personal-data-email"
            data={user.email}
            hasError={errors.email ? true : false}
            maxLength={65}
            errorMessage={errors.name?.message}
            className={inlineEditInputClassName}
            {...field}
          />
        )}
      />
      <Controller
        key="sc-controller-user-phone"
        name="phone"
        control={control}
        render={({ field }) => (
          <InlineEditInput
            key="sc-personal-data-phone"
            data={user.phone}
            hasError={errors.phone ? true : false}
            maxLength={65}
            errorMessage={errors.phone?.message}
            className={inlineEditInputClassName}
            {...field}
          />
        )}
      />
    </form>
  );
};
