import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AccountCircle, Lock } from "@mui/icons-material";
import { UserInput } from "../../../components/Input/User/UserInput";
import { PrimaryButton } from "../../../components/Button/Primary/PrimaryButton";

type LoginFormProps = {
  handleLoginForm: (data: any) => Promise<void>;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  handleLoginForm,
}: LoginFormProps) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Este campo é obrigatório.")
      .min(10, "Deve ser um e-mail válido"),
    password: Yup.string()
      .required("Este campo é obrigatório.")
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      onSubmit={handleSubmit((data) => handleLoginForm(data))}
      className="w-full flex flex-col justify-center items-center w-full sm:w-9/12 md:w-7/12 lg:w-5/12 2xl:w-4/12"
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
            icon={
              <AccountCircle
                fontSize="large"
                sx={{ color: "steelblue" }}
                className="align-bottom"
              />
            }
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
            icon={
              <Lock
                fontSize="large"
                sx={{ color: "steelblue" }}
                className="align-bottom"
              />
            }
          />
        )}
      />
      <div className="pt-8 w-full">
        <PrimaryButton buttonName="Login" />
      </div>
    </form>
  );
};
