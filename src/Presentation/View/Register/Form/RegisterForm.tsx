import { Controller, useForm } from "react-hook-form";
import { UserButton } from "../../../components/Button/User/UserButton";
import { UserInput } from "../../../components/Input/User/UserInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type RegisterFormProps = {
  handleSubmitForm: (data: any) => Promise<void>;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({
  handleSubmitForm,
}: RegisterFormProps) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Este campo é obrigatório.")
      .min(10, "Deve ser um e-mail válido"),
    password: Yup.string()
      .required("Este campo é obrigatório.")
      .min(9, "A senha deverá ter no mínimo 9 caracteres"),
    confirmPassword: Yup.string()
      .required("Este campo é obrigatório")
      .oneOf([Yup.ref("password")], "As senhas não coincidem"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      className="w-full flex flex-col justify-center items-center w-10/12 sm:w-9/12 md:w-7/12 lg:w-5/12 2xl:w-4/12"
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
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <UserInput
            type="password"
            id="password"
            label="Senha"
            hasError={errors.password ? true : false}
            maxLength={255}
            errorMessage={errors.password?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "As senhas não coincidem.",
        }}
        render={({ field }) => (
          <UserInput
            type="password"
            id="confirm-password"
            label="Confirme sua senha"
            hasError={errors.confirmPassword ? true : false}
            maxLength={255}
            errorMessage={errors.confirmPassword?.message}
            {...field}
          />
        )}
      />
      <div className="pt-8 w-full">
        <UserButton buttonName="Registrar" />
      </div>
    </form>
  );
};
