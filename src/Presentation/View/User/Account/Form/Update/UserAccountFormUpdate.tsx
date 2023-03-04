import { UpdateUserRequestData } from "../../../../../../Domain/Model/User/Update";
import { Controller, useForm } from "react-hook-form";
import { UserButton } from "../../../../../components/Button/User/UserButton";
import { UserInput } from "../../../../../components/Input/User/UserInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { CpfCnpjUserSwitch } from "../../../../../components/Switch/User/CpfCnpj/CpfCnpjUserSwitch";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";
import { cpf, cnpj } from "cpf-cnpj-validator";

type UserAccountFormUpdateProps = {
  handleUpdateForm: (data: UpdateUserRequestData) => Promise<void>;
};

export const UserAccountFormUpdate: React.FC<UserAccountFormUpdateProps> = ({
  handleUpdateForm,
}) => {
  const [isCPF, setIsCPF] = useState(true);

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Este campo é obrigatório.")
      .min(5, "Deve ser um nome válido"),
    cpf_cnpj: Yup.string()
      .required("Este campo é obrigatório.")
      .min(11, "Deve ser um documento válido")
      .test({
        name: "testIfItIsACPF",
        test: (parametro) => {
          if (parametro) {
            if (isCPF) {
              console.log(cpf.isValid(parametro));
              return cpf.isValid(parametro);
            }
            return cnpj.isValid(parametro);
          }
          return false;
        },
        message: isCPF ? 'O CPF é inválido' : 'O CNPJ é inválido'
      }),
    phone: Yup.string()
      .required("Este campo é obrigatório.")
      .min(14, "Deve ter ao menos 14 caracteres"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      onSubmit={handleSubmit((data) => handleUpdateForm(data))}
      className="w-11/12 flex flex-col justify-center items-center m-auto"
    >
      <Controller
        key="sc-controller-user-name"
        name="name"
        control={control}
        render={({ field }) => (
          <UserInput
            key="sc-input-user-name"
            type="name"
            id="name"
            label="Nome completo"
            hasError={errors.name ? true : false}
            maxLength={65}
            errorMessage={errors.name?.message}
            {...field}
          />
        )}
      />
      <div className="flex flex-row items-center w-full">
        <Controller
          key="sc-controller-user-cpf_cnpj"
          name="cpf_cnpj"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputMask
              mask={isCPF ? "999.999.999-99" : "99.999.999/9999-99"}
              alwaysShowMask
              onChange={onChange}
              value={value}
              name="cpf_cnpj"
            >
              {(inputProps): any => (
                <div
                  id={`sc-cpf_cnpj-container`}
                  className="mb-8 xl:mb-10 w-full flex"
                >
                  <TextField
                    type="cpf_cnpj"
                    helperText={errors.cpf_cnpj?.message}
                    error={errors.cpf_cnpj ? true : false}
                    id={`sc-cpf_cnpj-input`}
                    label={isCPF ? "CPF" : "CPNJ"}
                    variant="standard"
                    className={`!ml-1 w-full`}
                    inputProps={{ maxLength: 255 }}
                    {...inputProps}
                  />
                </div>
              )}
            </InputMask>
          )}
        />
        <CpfCnpjUserSwitch onClick={() => setIsCPF(!isCPF)} />
      </div>
      <Controller
        key="sc-controller-user-phone"
        name="phone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputMask
            mask="(99) 99999-9999"
            alwaysShowMask
            onChange={onChange}
            value={value}
            name="phone"
          >
            {(inputProps): any => (
              <div
                id={`sc-phone-container`}
                className="mb-8 xl:mb-10 w-full flex"
              >
                <TextField
                  type="phone"
                  helperText={errors.phone?.message}
                  error={errors.phone ? true : false}
                  id={`sc-phone-input`}
                  label="Telefone"
                  variant="standard"
                  className={`!ml-1 w-full`}
                  inputProps={{ maxLength: 255 }}
                  {...inputProps}
                />
              </div>
            )}
          </InputMask>
        )}
      />
      <div className="pt-8 w-full">
        <UserButton buttonName="Salvar" />
      </div>
    </form>
  );
};
