import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { UserInput } from "../../../components/Input/User/UserInput";
import { PrimaryButton } from "../../../components/Button/Primary/PrimaryButton";

interface RecoveryPasswordFormProps {
  handleRecoveryPasswordForm: (data: any) => Promise<void>;
}

export const RecoveryPasswordForm: React.FC<RecoveryPasswordFormProps> = ({
  handleRecoveryPasswordForm,
}) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Este campo é obrigatório.")
      .min(10, "Deve ser um e-mail válido"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      onSubmit={handleSubmit((data) => handleRecoveryPasswordForm(data))}
      className="w-full flex flex-col justify-center items-center w-full sm:w-9/12 md:w-7/12 lg:w-5/12 2xl:w-4/12 gap-3"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <UserInput
            type="email"
            id="email"
            label="E-mail"
            hasError={errors.email ? true : false}
            maxLength={65}
            errorMessage={errors.email?.message}
            {...field}
          />
        )}
      />
      <div className="pt-8 w-full">
        <PrimaryButton buttonName="Enviar" />
      </div>
    </form>
  );
};
