import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { ChangePasswordParamDataType } from "../../../../../../../Domain/UseCase/User/ChangePassword";

export interface ChangePasswordProps {
  handleUpdateForm: (data: ChangePasswordParamDataType) => Promise<void>;
}

export const PersonalDataChangePasswordForm: React.FC<ChangePasswordProps> = ({
  handleUpdateForm,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = Yup.object().shape({
    actualPass: Yup.string()
      .min(9, "A senha deve ter ao menos 9 caracteres")
      .required("Este é um campo obrigatório"),
    newPass: Yup.string()
      .min(9, "A senha deve ter ao menos 9 caracteres")
      .required("Este é um campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha deve conter ao menos uma letra e um número"
      )
      .notOneOf(
        [Yup.ref("password"), null],
        "A mesma senha não poderá ser usada."
      ),
  });

  const formOptions = {
    resolver: yupResolver(formSchema),
    defaultValues: {
      actualPass: "",
      newPass: "",
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        setIsLoading(true);

        handleUpdateForm(data)
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      })}
      className="flex flex-col w-full text-base mt-2"
    >
      <p className="mb-2">Alterar senha</p>
      <div className="gap-4 flex">
        <Controller
          key="sc-controller-user-actual-pass"
          name="actualPass"
          control={control}
          render={({ field }) => (
            <TextField
              type="password"
              className="!font-inherit !text-inherit w-full sm:w-11/12"
              id="inline-edit-input-actual-pass"
              aria-describedby="inline-edit-input-actual-pass"
              inputProps={{
                "aria-label": "inline-edit-input",
                maxLength: 65,
              }}
              label="Senha atual"
              {...field}
              error={errors.actualPass ? true : false}
              // @ts-expect-error
              helperText={errors.actualPass?.message}
            />
          )}
        />
        <Controller
          key="sc-controller-user-new-pass"
          name="newPass"
          control={control}
          render={({ field }) => (
            <TextField
              type="password"
              className="!font-inherit !text-inherit w-full sm:w-11/12"
              id="inline-edit-input-new-pass"
              aria-describedby="inline-edit-input-new-pass"
              inputProps={{
                "aria-label": "inline-edit-input",
                maxLength: 65,
              }}
              label="Senha nova"
              {...field}
              error={errors.newPass ? true : false}
              // @ts-expect-error
              helperText={errors.newPass?.message}
            />
          )}
        />
      </div>
      <button className="self-end text-sm mt-1" type="submit">
        {isLoading ? "Salvando..." : "Enviar"}
      </button>
    </form>
  );
};
